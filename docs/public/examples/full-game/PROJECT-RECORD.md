# A short, sufficient project record

Teaching reference produced with coding-agent assistance. Not a real student's submission or a record of human peer participation.

**Audience and promise:** NJIT students who want a short break and a readable way to see habits. Sign in, play a round, see private results, change account details and sign out.

**Two ideas:** (A) a prediction playground with transparent opponents; (B) a story duel with branching dialogue. Choose A: a reason to replay while keeping accounts/game/history small. B stays a future option.

**Five stories:** join/return; play/save once; see private progress; maintain my account; leave safely. Acceptance follows the course's five required journeys. Each saved score is one completed round.

**Architecture:** HTML forms → Flask routes → pure rules/Strategy + SQLite. Routes identify the user and validate requests. SQLite stores owned accounts, sessions and rounds. The browser cannot declare a win or choose someone else's account.

**Pattern choice:** try Strategy as two functions with the same history input. The route chooses from a named map. A single conditional also works for two opponents. Functions let tests check opponent behavior without requests; a class hierarchy adds no value here. Keep the small function-based version.

**Actual checks:** `python -B -m pytest -q -p no:cacheprovider` → 30 passed. Nine literal outcomes, CSRF, wrong credentials, ownership, password/session revocation, logout cookie replay, persistence and concurrent retry. See TEST-NOTES.md.

**Agent expectation → result → next time:** expected a compact game with required account boundaries. The first test command from the repository root could not import `app`; it was not green. Added `pytest.ini` with an explicit import/test path and documented running inside the app directory. The corrected 30-check run passed. Next time, agree the working directory and verification command before generating the harness. Request/database checks do not establish real human usability.

**Peer feedback:** not performed by a classmate. Before submitting, ask a peer to register, play, locate a saved round and change the name. Record their actual difficulty, create an issue, make a useful change and rerun affected checks. Do not copy an invented conversation.

**Example issue to adapt, not an executed history:** “Refreshing a result must not add another score.” Acceptance: finish round 12, refresh/repeat its move request, count remains one. Link your real issue/commit/test; this package has no fabricated PR URL.

**Still needed for a complete student hand-in:** personal theme and justified changes, revision/CI links, real peer issue → change → retest, and your explanation. This reference alone cannot earn that evidence credit.
