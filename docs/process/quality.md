# Check what you actually built

**A test needs an expected result you can explain.** Check the main task, a likely mistake and the result shown to the user. Record the revision, expected/actual result, command or task, and any fix/retest in your existing spec.

## Start with meaningful checks

| Check | What to establish |
| --- | --- |
| Rules | Use nine literal expected RPS outcomes, including a valid losing round. Expected answers must not come from the winner function being tested. |
| Layers | Check the rule function, the real request/result path, and a real browser round/replay separately. |
| Rejected input | Try a missing or unsupported move; check the specified response. |
| Delivery | Run the posted full check and inspect CI on the final PR commit; `--fast` is not final RPS-001 evidence. |
| Interface | Try a narrow screen, keyboard controls, visible focus, labeled fields and clear errors. Check important links and setup steps. |
| Peer task | Let a real classmate try without coaching. Record the obstacle, choose a meaningful change and retest. |

**RPS-001:** keep its original rules, checks and 30/30/15/15/10 rubric. Later accounts/dashboard work is planned until posted. A browser-only login screen cannot prove future server-side authentication. [Current Studio scope](/projects/studios#rps-001-posted).

## Keep evidence honest

- **Executed:** identify the command/task, revision and actual result.
- **Pending or failed:** say so and name the next action.
- **Limited:** explain what the check does not prove. A pure-function test does not prove a real browser task or deployed service works.

A passing build is not a usability check. A screenshot of a role or success message is not proof of server enforcement or persistence. Use synthetic data, and remove secrets/private information from public evidence.

For the group, each member checks someone else's work. Automated checks cover important behavior; a real walkthrough checks understanding and use. Keep the [issue → response → change → retest](/process/github-feedback) evidence linked from the same [project record](/templates/project-record).

[Review routine](/process/collaboration) · [Current Studio requirements](/projects/studios).
