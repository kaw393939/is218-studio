// The game rules and match transitions do not depend on the DOM or an AI service.
export const MOVES = Object.freeze(['rock', 'paper', 'scissors']);
export const TARGET = 2;
const BEATS = Object.freeze({ rock: 'scissors', paper: 'rock', scissors: 'paper' });

export function requireMove(move) {
  if (!MOVES.includes(move)) throw new TypeError('Choose rock, paper, or scissors.');
  return move;
}

export function resolveRound(player, opponent) {
  requireMove(player);
  requireMove(opponent);
  if (player === opponent) return { outcome: 'tie', explanation: 'Same move. Neither score changes.' };
  const outcome = BEATS[player] === opponent ? 'player' : 'opponent';
  const winner = outcome === 'player' ? player : opponent;
  const loser = outcome === 'player' ? opponent : player;
  return { outcome, explanation: `${winner[0].toUpperCase() + winner.slice(1)} beats ${loser}.` };
}

export function createMatch() {
  return { playerScore: 0, opponentScore: 0, status: 'playing', winner: null, rounds: [] };
}

// Inject the opponent. It sees only completed rounds, never the current choice.
export function playRound(state, player, chooseOpponent) {
  requireMove(player);
  if (state.status === 'complete') return state;
  if (typeof chooseOpponent !== 'function') throw new TypeError('Choose an opponent strategy.');
  const history = Object.freeze(state.rounds.map(round => Object.freeze({ ...round })));
  const decision = chooseOpponent(history);
  requireMove(decision?.move);
  const result = resolveRound(player, decision.move);
  const playerScore = state.playerScore + (result.outcome === 'player' ? 1 : 0);
  const opponentScore = state.opponentScore + (result.outcome === 'opponent' ? 1 : 0);
  const winner = playerScore === TARGET ? 'player' : opponentScore === TARGET ? 'opponent' : null;
  return {
    playerScore, opponentScore, status: winner ? 'complete' : 'playing', winner,
    rounds: [...state.rounds, {
      player, opponent: decision.move, ...result,
      strategyNote: String(decision.note || 'No explanation supplied.'),
      prediction: decision.prediction ?? null
    }]
  };
}
