import test from 'node:test';
import assert from 'node:assert/strict';
import { createMatch, playRound, resolveRound } from './core.mjs';
import { clockwork, habitReader, getOpponent } from './strategies.mjs';

// Literal expectations are independent of the game's lookup table.
const expected = {
  rock: { rock: 'tie', paper: 'opponent', scissors: 'player' },
  paper: { rock: 'player', paper: 'tie', scissors: 'opponent' },
  scissors: { rock: 'opponent', paper: 'player', scissors: 'tie' }
};
for (const [player, opponents] of Object.entries(expected)) {
  for (const [opponent, outcome] of Object.entries(opponents)) {
    test(`${player} vs ${opponent} → ${outcome}`, () => assert.equal(resolveRound(player, opponent).outcome, outcome));
  }
}

const fixed = move => () => ({ move, note: 'Fixed test opponent.' });
const historyOf = (...moves) => moves.map(player => ({ player }));

test('invalid player and opponent moves are rejected', () => {
  for (const invalid of ['', 'lizard', 'Rock', null, undefined, 1, {}]) {
    assert.throws(() => resolveRound(invalid, 'rock'), TypeError);
    assert.throws(() => resolveRound('rock', invalid), TypeError);
  }
});

test('a new match is scoreless and contains no shared mutable history', () => {
  const one = createMatch();
  const two = createMatch();
  assert.deepEqual(one, { playerScore: 0, opponentScore: 0, status: 'playing', winner: null, rounds: [] });
  assert.notEqual(one.rounds, two.rounds);
});

test('one win is recorded but does not end a first-to-two match', () => {
  const next = playRound(createMatch(), 'paper', fixed('rock'));
  assert.equal(next.playerScore, 1);
  assert.equal(next.opponentScore, 0);
  assert.equal(next.status, 'playing');
  assert.equal(next.winner, null);
  assert.deepEqual(next.rounds[0], {
    player: 'paper', opponent: 'rock', outcome: 'player', explanation: 'Paper beats rock.',
    strategyNote: 'Fixed test opponent.', prediction: null
  });
});

test('ties are recorded without changing either score', () => {
  let state = playRound(createMatch(), 'paper', fixed('rock'));
  state = playRound(state, 'scissors', fixed('scissors'));
  assert.equal(state.playerScore, 1);
  assert.equal(state.opponentScore, 0);
  assert.equal(state.status, 'playing');
  assert.equal(state.rounds.length, 2);
  assert.equal(state.rounds[1].outcome, 'tie');
});

test('the second player win ends the match', () => {
  let state = playRound(createMatch(), 'paper', fixed('rock'));
  state = playRound(state, 'rock', fixed('paper'));
  state = playRound(state, 'scissors', fixed('paper'));
  assert.equal(state.status, 'complete');
  assert.equal(state.winner, 'player');
  assert.equal(state.playerScore, 2);
  assert.equal(state.opponentScore, 1);
});

test('the second opponent win ends the match', () => {
  let state = playRound(createMatch(), 'rock', fixed('paper'));
  state = playRound(state, 'paper', fixed('scissors'));
  assert.equal(state.status, 'complete');
  assert.equal(state.winner, 'opponent');
  assert.equal(state.opponentScore, 2);
});

test('extra actions after completion cannot add a score or round or call the bot', () => {
  let state = playRound(createMatch(), 'paper', fixed('rock'));
  state = playRound(state, 'paper', fixed('rock'));
  const ended = state;
  for (let index = 0; index < 3; index++) state = playRound(state, 'paper', () => { throw new Error('Bot must not be called.'); });
  assert.equal(state, ended);
  assert.equal(state.rounds.length, 2);
  assert.equal(state.playerScore, 2);
});

test('a new match resets scores and history after completion', () => {
  let state = playRound(createMatch(), 'paper', fixed('rock'));
  state = playRound(state, 'paper', fixed('rock'));
  state = createMatch();
  assert.equal(state.status, 'playing');
  assert.equal(state.playerScore, 0);
  assert.equal(state.opponentScore, 0);
  assert.deepEqual(state.rounds, []);
  state = playRound(state, 'rock', clockwork);
  assert.equal(state.rounds[0].opponent, 'rock');
  assert.equal(state.rounds[0].outcome, 'tie');
});

test('a transition does not modify the earlier match state', () => {
  const before = playRound(createMatch(), 'rock', fixed('rock'));
  const copy = structuredClone(before);
  const next = playRound(before, 'paper', fixed('rock'));
  assert.deepEqual(before, copy);
  assert.notEqual(next, before);
  assert.notEqual(next.rounds, before.rounds);
});

test('an injected opponent receives only completed, read-only rounds', () => {
  const previous = playRound(createMatch(), 'paper', fixed('rock'));
  let called = false;
  const state = playRound(previous, 'scissors', history => {
    called = true;
    assert.equal(history.length, 1);
    assert.equal(history[0].player, 'paper');
    assert.throws(() => history.push({ player: 'scissors' }), TypeError);
    assert.throws(() => { history[0].player = 'scissors'; }, TypeError);
    return { move: 'paper', note: 'Injected decision.' };
  });
  assert.equal(called, true);
  assert.equal(state.rounds[1].outcome, 'player');
  assert.equal(state.rounds[1].strategyNote, 'Injected decision.');
});

test('a rejected input does not call the opponent or mutate the match', () => {
  const state = createMatch();
  assert.throws(() => playRound(state, 'lizard', () => { throw new Error('Must not run.'); }), TypeError);
  assert.deepEqual(state, createMatch());
});

test('missing strategies and invalid opponent decisions are rejected', () => {
  for (const choose of [null, undefined, 'rock']) assert.throws(() => playRound(createMatch(), 'rock', choose), TypeError);
  for (const decision of [undefined, {}, { move: 'lizard' }]) assert.throws(() => playRound(createMatch(), 'rock', () => decision), TypeError);
});

test('Clockwork cycles rock, paper, scissors, then rock using completed-round count', () => {
  assert.deepEqual([0, 1, 2, 3, 4].map(count => clockwork(Array(count).fill({ player: 'paper' })).move), ['rock', 'paper', 'scissors', 'rock', 'paper']);
});

test('Habit Reader has an explicit cold start rather than inventing past behavior', () => {
  assert.equal(habitReader([]).move, 'rock');
  assert.equal(habitReader([]).prediction, null);
});

test('Habit Reader counters the most frequent earlier player move', () => {
  const decision = habitReader(historyOf('paper', 'scissors', 'paper'));
  assert.equal(decision.prediction, 'paper');
  assert.equal(decision.move, 'scissors');
  assert.match(decision.note, /2 of 3/);
});

test('frequency ties resolve consistently in rock, paper, scissors order', () => {
  assert.equal(habitReader(historyOf('scissors', 'paper')).prediction, 'paper');
  assert.equal(habitReader(historyOf('scissors', 'paper', 'rock')).prediction, 'rock');
});

test('changing the selected opponent actually replaces the behavior', () => {
  const clockworkGame = playRound(createMatch(), 'paper', getOpponent('clockwork').choose);
  const habitGame = playRound(createMatch(), 'paper', getOpponent('habit').choose);
  const secondClockwork = playRound(clockworkGame, 'rock', getOpponent('clockwork').choose);
  const secondHabit = playRound(habitGame, 'rock', getOpponent('habit').choose);
  assert.equal(secondClockwork.rounds[1].opponent, 'paper');
  assert.equal(secondHabit.rounds[1].opponent, 'scissors');
});

test('unknown opponent selections are rejected, including object-prototype names', () => {
  for (const id of ['expert', '', 'toString', '__proto__']) assert.throws(() => getOpponent(id), TypeError);
});

test('a simple prediction can fail when a player changes habits', () => {
  let state = playRound(createMatch(), 'rock', getOpponent('habit').choose);
  state = playRound(state, 'scissors', getOpponent('habit').choose);
  assert.equal(state.rounds[1].prediction, 'rock');
  assert.equal(state.rounds[1].opponent, 'paper');
  assert.equal(state.rounds[1].outcome, 'player');
});
