import { resolveRound, randomChoice } from './rules.mjs';
const form = document.querySelector('#round-form');
const title = document.querySelector('#result-title');
const message = document.querySelector('#result-message');
const pair = document.querySelector('#choice-pair');
const error = document.querySelector('#form-error');
form.addEventListener('submit', event => {
  event.preventDefault();
  error.textContent = '';
  const data = new FormData(form);
  const player = data.get('player');
  if (!player) { error.textContent = 'Choose your move before playing.'; form.querySelector('input[name=player]').focus(); return; }
  const mode = data.get('computer');
  const computer = mode === 'random' ? randomChoice() : mode;
  const result = resolveRound(player, computer);
  document.querySelector('#player-result').textContent = player[0].toUpperCase() + player.slice(1);
  document.querySelector('#computer-result').textContent = computer[0].toUpperCase() + computer.slice(1);
  pair.hidden = false;
  title.textContent = result.title;
  message.textContent = result.explanation + (mode === 'random' ? ' Computer move was chosen randomly.' : ' A fixed computer move was used for this test.');
});
document.querySelector('#replay').addEventListener('click', () => {
  form.reset(); error.textContent = ''; pair.hidden = true;
  title.textContent = 'Ready for your first round?';
  message.textContent = 'Choose a move, then play. Both choices and the result will appear here.';
  form.querySelector('input[name=player]').focus();
});
