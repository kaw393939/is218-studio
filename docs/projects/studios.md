# Continue the app you already own

A Studio practices a focused skill. The individual project gives the application a creative purpose; a review explains how the whole project is progressing. **Reuse the repository, spec and evidence links.** Do not write the same result in two reports.

## RPS-001 posted

**100 points.** [001 assignment](https://njit.instructure.com/courses/70712/assignments/768166): Nov 4, 11:59 p.m. · [003 assignment](https://njit.instructure.com/courses/70713/assignments/767675): Nov 2, 11:59 p.m. Eastern. Follow your section's Canvas due table.

1. Create your own copy of the [starter](https://github.com/kaw393939/is218-rps-starter), clone with your class SSH setup, and use Python 3.12 with this clone's virtual environment. Follow `README.md` and `AGENTS.md` one checkpoint at a time.
2. Predict a matchup and why; agree on `SPEC.md`, a valid losing round and an input to reject. Create an issue and feature branch.
3. Implement `determine_winner(player, computer)` returning `win`, `lose` or `tie` from the player’s perspective: nine outcomes, both choices/result shown and a new independent round. Keep the supplied interface/server.
4. Add the nine literal unit outcomes, real request/result integration and a real browser round/replay. Keep negative-input checks; fix only randomness in positive tests, not the winner function.
5. Run full `.venv/bin/python check.py`: Black, Pylint, non-browser pytest and Chromium E2E. `--fast` is not final evidence. Inspect the actual diff and tests.
6. Explain one test and the mistake it catches. Play a round and record moves/result/why; try replay and keyboard controls. Link the issue, code, tests and real full-check results in `SPEC.md`.
7. Push a PR linked to the issue. Save real PR/CI links in `SPEC.md`, push that update, wait for Python checks on the final PR commit, then merge. Submit **your own repository URL**, with completed work on `main`.

**RPS-001 excludes scoring, storage, accounts, a new framework and an AI API.** Later work does not change this task's original grade. No chat transcript or separate reflection is required. Keep environments, caches, credentials and local data out of Git.

| Published criterion | Points |
| --- | ---: |
| Rules and round behavior | 30 |
| Meaningful automated tests | 30 |
| Full checks and CI | 15 |
| SPEC and review evidence | 15 |
| GitHub delivery | 10 |

Its rubric uses complete/full, partial/half, or missing/zero evidence per row. [Guided lab](https://kaw393939.github.io/218_spec/) · [Setup help](https://kaw393939.github.io/218_spec/setup.html).

## Two later Studios — planned

The instructor's **November 3 creative direction** replaces the earlier prospective accounts/dashboard outline with transferable engineering practice. Use your chosen creative application and its language/framework. These briefs, dates and rubrics remain planned until Canvas posts them; RPS-001 above is unchanged.

| Studio | Evidence in the selected app | Planning target |
| --- | --- | --- |
| **Studio 002 · Tests and design decisions** | A new working slice, independently expected automated checks, and a useful pattern experiment compared with a simpler alternative. Explain the problem the design solves. | 003 Nov 19, 2:30 p.m.; 001 Nov 20, 10 a.m. |
| **Studio 003 · Architecture and integration** | Connected responsibilities, a tested change/refactoring, a realistic user journey and actual check/CI results. Explain an agent-generated change you kept, revised or rejected. | 003 Nov 30, 2:30 p.m.; 001 Dec 2, 10 a.m. |

No second RPS account system is required just because you chose another creative app. Accounts, persistence or a dashboard can be useful design choices where your task needs them; claims about them need actual checks. A browser-only creative app can be appropriate for a browser-only promise.

Keep one evolving spec per project. A Studio receipt links the focused skill and check; the project review explains the whole app's progress. Reuse evidence rather than writing two reports. [Creative challenge](/projects/creative-challenge) · [Architecture and patterns](/process/architecture) · [Current section dates](/course/schedule).
