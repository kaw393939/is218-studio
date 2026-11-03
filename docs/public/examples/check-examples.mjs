import assert from 'node:assert/strict';
import { resolveRound, randomChoice } from './rps/rules.mjs';
import { createRequest } from './deskready/requests.mjs';
const expected = {
  rock: { rock: 'draw', paper: 'loss', scissors: 'win' },
  paper: { rock: 'win', paper: 'draw', scissors: 'loss' },
  scissors: { rock: 'loss', paper: 'win', scissors: 'draw' }
};
let rounds = 0;
for (const [player, opponents] of Object.entries(expected)) for (const [computer, outcome] of Object.entries(opponents)) {
  assert.equal(resolveRound(player, computer).outcome, outcome); rounds++;
}
assert.throws(() => resolveRound('', 'rock'));
assert.throws(() => resolveRound('rock', 'lizard'));
assert.equal(randomChoice(() => 0), 'rock');
assert.equal(randomChoice(() => 1 / 3), 'paper');
assert.equal(randomChoice(() => 0.9999), 'scissors');
assert.throws(() => randomChoice(() => 1));
assert.deepEqual(createRequest({ service: 'room', window: 'morning', note: '  Team practice  ' }, 2), {
  id: 'DR-002', service: 'Quiet meeting room', window: 'Morning · 9 a.m.–noon', note: 'Team practice', status: 'Pending review'
});
for (const service of ['room', 'table', 'equipment']) for (const window of ['morning', 'afternoon', 'evening']) assert.equal(createRequest({ service, window }).status, 'Pending review');
assert.throws(() => createRequest({ service: '', window: 'morning' }));
assert.throws(() => createRequest({ service: 'room', window: '' }));
assert.throws(() => createRequest({ service: 'room', window: 'morning', note: 'x'.repeat(241) }));
assert.equal(createRequest({ service: 'room', window: 'evening', note: '<script>test</script>' }).note, '<script>test</script>');
assert.throws(() => createRequest({ service: 'room', window: 'morning' }, 0));
console.log(`PASS: ${rounds} RPS outcomes; invalid choices; random boundaries; all 9 request service/window pairs; pending status; trimmed notes; length/sequence validation. These are logic checks, not a browser or course CI test.`);
