# Check what you actually built

**A useful test has an expected result you can explain before running it.** Choose checks for your application's behavior and architecture, using tools that fit your language or framework.

## Check the creative project in layers

| Layer | Example of useful evidence |
| --- | --- |
| **Core rules** | Fixed inputs produce independently expected answers. An opponent strategy or request validator can be checked without opening the whole interface. |
| **Connections** | Two real parts work together: a controller calls the rules, a screen displays the returned result, or a server stores and retrieves a request. Check the boundaries your app actually has. |
| **User task** | Complete the main experience and a likely failure path. For a web app, try keyboard controls, a narrow screen and clear errors. |
| **Delivery** | Run the chosen stack's documented checks at the actual revision. Inspect required CI and try the setup instructions. |

Expected answers should come from the spec or an independent example. A test that calculates its expected answer using the same function being tested may repeat the same mistake.

The creative final requires real account/session, private saved-score and maintenance checks. Test anonymous and second-user requests directly, persisted results, password/session changes and logout. [Five required journeys](/projects/game-app). Bot Lab checks a game core only. A static portfolio instead needs reader, link, mobile and keyboard checks; use the checks appropriate to each product.

## Add evidence at each review

- **Plan:** predict a success and failure; identify the boundary and design choice to investigate.
- **First slice:** run meaningful tests. Try a small [pattern experiment](/process/architecture) in code and compare it with another approach.
- **Integrated build:** check connected parts; use the experiment's evidence to keep, refactor or remove the pattern. Explain the problem, benefit and cost.
- **Improve:** record a real peer's task, make a meaningful change and rerun the affected checks. Explain an AI success or disappointment and what you would change next time.

Keep command/task, revision, expected result and actual result in the [same record](/templates/project-record). Mark a check **passed, failed or not run**. Explain its limits: a pure-function test alone does not establish a working user journey.

## Current RPS-001 keeps its exact checks

Use the supplied Python project: nine literal outcomes, rejected-input checks, real request/result integration and a real browser round/replay. Run full `.venv/bin/python check.py` and inspect CI on the final PR commit; `--fast` is not final evidence. Its original **30/30/15/15/10** rubric remains unchanged. [Posted checklist](/projects/studios#rps-001-posted).

[Review with a classmate](/process/collaboration) · [Issue → change → retest](/process/github-feedback).
