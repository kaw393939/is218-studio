import { createMatch, playRound } from './core.mjs';
import { getOpponent } from './strategies.mjs';

let state = createMatch();
let opponentId = 'clockwork';
const byId = id => document.getElementById(id);
const moveButtons = [...document.querySelectorAll('[data-move]')];

function element(tag, text, className) {
  const node = document.createElement(tag);
  node.textContent = text;
  if (className) node.className = className;
  return node;
}

function render(message = '') {
  const opponent = getOpponent(opponentId);
  byId('player-score').textContent = state.playerScore;
  byId('opponent-score').textContent = state.opponentScore;
  byId('opponent-name').textContent = opponent.name;
  byId('opponent-description').textContent = opponent.description;
  for (const button of moveButtons) button.disabled = state.status === 'complete';
  byId('round-label').textContent = state.status === 'complete' ? 'Match complete' : state.rounds.length
    ? `Round ${state.rounds.length} result · next: round ${state.rounds.length + 1}`
    : 'Round 1 · first to 2';
  const last = state.rounds.at(-1);
  let headline = 'Your move. Find the pattern.';
  if (last) headline = last.outcome === 'tie' ? 'Tie. Try another move.' : last.outcome === 'player' ? 'You take the round.' : `${opponent.name} takes the round.`;
  if (state.status === 'complete') headline = state.winner === 'player' ? 'You cracked this match.' : `${opponent.name} won this match.`;
  byId('headline').textContent = headline;
  byId('result-details').textContent = last
    ? `You: ${last.player}. ${opponent.name}: ${last.opponent}. ${last.explanation}`
    : 'Pick rock, paper, or scissors below. Ties do not change the score.';
  byId('bot-note').textContent = last?.strategyNote ?? 'After each round, the bot explains its decision. It cannot see your current move.';
  byId('history-empty').hidden = state.rounds.length > 0;
  const history = byId('history');
  history.replaceChildren();
  state.rounds.forEach((round, index) => {
    const row = element('li', '', `history-row ${round.outcome}`);
    row.append(element('span', String(index + 1), 'round-number'));
    row.append(element('span', `You: ${round.player} · Bot: ${round.opponent}`, 'round-moves'));
    row.append(element('span', round.outcome === 'tie' ? 'Tie' : round.outcome === 'player' ? 'You +1' : 'Bot +1', 'round-outcome'));
    history.append(row);
  });
  byId('announcement').textContent = message || [headline, byId('result-details').textContent, `Score: you ${state.playerScore}, bot ${state.opponentScore}.`].join(' ');
}

for (const button of moveButtons) button.addEventListener('click', () => {
  if (state.status === 'complete') return;
  state = playRound(state, button.dataset.move, getOpponent(opponentId).choose);
  render();
  if (state.status === 'complete') byId('reset').focus();
});

byId('opponent').addEventListener('change', event => {
  opponentId = event.target.value;
  state = createMatch();
  render(`New match against ${getOpponent(opponentId).name}. Scores and history reset. Choose your move.`);
});

byId('reset').addEventListener('click', () => {
  state = createMatch();
  render(`New match against ${getOpponent(opponentId).name}. Scores and history reset. Choose your move.`);
  moveButtons[0].focus();
});

render();
