# From a playable game to a complete application

**One game, one account type, one private dashboard.** Keep the world, style and experience creative while making the required account/result journey reliable. This is the later creative-project plan; [posted RPS-001](/projects/studios#rps-001-posted) keeps its original scope.

## Five stories to adapt

| Story | Observable result |
| --- | --- |
| **Join and return** | A new user can register, sign in and return later. Duplicate accounts and wrong passwords produce useful errors. Passwords are stored as hashes using the framework/library. |
| **Play and save** | A signed-in player completes a game; the backend validates the action and records the correct result for that player. Repeating the same completed-game request cannot add the result twice. |
| **See my progress** | The private dashboard shows my saved totals and recent results. A new account gets a clear empty state; refresh/restart preserves saved data. |
| **Maintain my account** | I can change my display name and change my password by verifying the current password. The old password then fails; stale sessions are revoked according to the documented flow. I can sign in again with the new password. |
| **Leave safely** | Logout invalidates the session. A direct private-page or data request after logout is denied, even if a browser still has an old page open. |

**Private means enforced by the application backend.** Another account cannot fetch or change my private records by changing an ID in a request. A public leaderboard, multiplayer, admin role, payment system, email verification and password recovery are outside this minimum. Choose a small additional experiment only after the core works.

## Trace the whole journey

<ArchitectureSketch accounts />

The interface requests an action. The backend identifies the user, validates the action and applies the rules. The database saves the owned result. The dashboard reads that user's saved data. Explain where each step happens in your actual stack.

Use a supported authentication component rather than inventing password hashing or session tokens. An existing Python foundation is a practical option; another framework is valid when you can demonstrate equivalent behavior. A game engine can use a small backend or supported service. Choose the supported path you can explain and test.

For RPS, the backend determines the outcome from validated moves and its opponent. It does not accept a client-supplied “I won” as the authoritative result. Define whether a saved result represents a round or a match; use that same unit in totals and tests.

## Build and check in small steps

| Step | Independent check before moving on |
| --- | --- |
| **Game core** | All nine RPS outcomes, or the chosen game's complete small rule table; ties, ending and replay. |
| **Accounts + first saved result** | Create a throwaway user, reject a wrong password, save a valid result, reload it and log out. |
| **Dashboard + maintenance** | Empty state, correct totals/history, two-user isolation, rejected invalid updates, display-name change, password/session behavior. |
| **Integrated handoff** | A browser journey from signup to logout, denied direct requests, persistent data, full documented checks/CI and one regression after peer feedback. |

Predict expected answers independently of the generated code. Unit tests check rules; integration tests check requests/session/database together; browser tests check a complete journey. A green starter or a pure-function test does not establish the later layers.

Use synthetic users and game data. Keep local databases, secrets and personal passwords out of Git. Document setup and how tests create/reset their own data.

## Bound the delivery

A local application with reproducible setup can demonstrate these behaviors. Put the public portfolio on suitable hosting; a backend game requires hosting that runs its server or supported service. GitHub Pages alone serves static files. A public game deployment is a later confirmed delivery choice, not an instruction to buy a VPS or reproduce another course's hosting stack.

**Evidence:** link the source revision, actual test/CI results, architecture/pattern decision and a real peer issue/change/retest from the [same project record](/templates/project-record). Do not claim a static preview implements the missing account system.
