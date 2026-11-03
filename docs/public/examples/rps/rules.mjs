export const choices = ['rock', 'paper', 'scissors'];
export function resolveRound(player, computer) {
  if (!choices.includes(player) || !choices.includes(computer)) throw new Error('Choose rock, paper, or scissors.');
  if (player === computer) return { outcome: 'draw', title: 'It’s a draw.', explanation: `Both chose ${player}. Try another round.` };
  const beats = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  const win = beats[player] === computer;
  const winner = win ? player : computer;
  const loser = win ? computer : player;
  return { outcome: win ? 'win' : 'loss', title: win ? 'You win this round.' : 'Computer wins this round.', explanation: `${winner[0].toUpperCase() + winner.slice(1)} beats ${loser}.` };
}
export function randomChoice(random = Math.random) {
  const value = random();
  if (!(value >= 0 && value < 1)) throw new Error('Random value must be between 0 and 1.');
  return choices[Math.floor(value * choices.length)];
}
