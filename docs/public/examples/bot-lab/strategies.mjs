import { MOVES } from './core.mjs';
const COUNTER = Object.freeze({ rock: 'paper', paper: 'scissors', scissors: 'rock' });

export function clockwork(history) {
  const move = MOVES[history.length % MOVES.length];
  return { move, note: `Clockwork follows rock → paper → scissors. This was turn ${history.length + 1}.` };
}

export function habitReader(history) {
  if (!history.length) return {
    move: 'rock', prediction: null,
    note: 'No history yet. Habit Reader opens with rock.'
  };
  const counts = Object.fromEntries(MOVES.map(move => [move, 0]));
  for (const round of history) counts[round.player]++;
  // A frequency tie uses rock, then paper, then scissors. No randomness or peeking.
  const prediction = MOVES.reduce((best, move) => counts[move] > counts[best] ? move : best, 'rock');
  return {
    move: COUNTER[prediction], prediction,
    note: `Your most frequent earlier move was ${prediction} (${counts[prediction]} of ${history.length}). It guessed ${prediction} again and chose ${COUNTER[prediction]}.`
  };
}

export const OPPONENTS = Object.freeze({
  clockwork: Object.freeze({ name: 'Clockwork', choose: clockwork,
    description: 'Follows a fixed cycle. Discover it, then beat it.' }),
  habit: Object.freeze({ name: 'Habit Reader', choose: habitReader,
    description: 'Counters your most frequent earlier move. Can you mislead it?' })
});

export function getOpponent(id) {
  if (!Object.hasOwn(OPPONENTS, id)) throw new TypeError('Unknown opponent.');
  return OPPONENTS[id];
}
