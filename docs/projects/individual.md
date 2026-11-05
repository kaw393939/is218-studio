# Your Creative Extravaganza: a game with a real account journey

**Imagine a game you want to make. Finish a small version that someone can sign into, play, return to and manage.** RPS or another simple game supplies the core. Any language, framework or engine is welcome when it supports the required behavior and meaningful tests.

The final-project review assignments are published in Canvas for both sections. Follow your [section's review links and dates](/course/schedule); the posted RPS-001 task stays unchanged.

## Start with one playable idea

Two rough directions help you choose. Build **one** finished game/account flow; shared code and assets are fine.

[Try the complete game reference](/examples/full-game), then choose a theme, opponent or interaction that interests you. Sketch two possible first screens. Your own code and checks will grow from that choice.

For research, inspect the [AI Game Lab notebook](https://kaw393939.github.io/is218-individual-game/) and its [repository](https://github.com/kaw393939/is218-individual-game). It is an instructor research/planning example, not a completed game or required engine choice. Investigate your own concepts, compare original sources and turn your decisions into a specification. Its narrower exploratory scope does not replace the complete account/game journey below. [All research examples and how to use them](/course/research-examples).

## Required final experience

1. **Accounts:** sign up, sign in and sign out; useful error messages and server-enforced access.
2. **Game:** clear rules, correct results and replay. Preserve standard RPS outcomes if using RPS.
3. **Saved scores:** persist results for the signed-in player; a refresh or new session does not erase them.
4. **Private dashboard:** show that player's wins/losses/ties or equivalent game measures and recent results, including a useful empty state.
5. **Account maintenance:** edit your own display name and change your password using the current password. Handle sessions consistently after the change.

Keep other users' private results and account changes protected. Use a maintained authentication library/framework and synthetic test accounts. A visual login screen or browser storage alone cannot establish these behaviors. [Exact journeys and checks](/projects/game-app).

A non-game idea already agreed with the instructor needs an equivalent meaningful result/history workflow. Agree that mapping before building; the account and evidence expectations still apply.

<details>
<summary>Planning, engineering evidence and the four reviews</summary>

## Keep three things in view

| Part | Your decision |
| --- | --- |
| **Dream** | The bigger experience and who would enjoy it: a sci-fi duel, accessible arcade, prediction exhibit or your own idea. |
| **Working promise** | One complete account → game → saved result → dashboard → account-update journey. |
| **Experiment** | One uncertain creative idea to investigate with AI. Set a stopping point and keep a usable fallback. |

For example: a **Battle of the Bots** arena. A player signs in, chooses an opponent, finishes a short match, sees saved results and changes their display name. Reactive commentary is the experiment; a whole multiplayer league stays outside this term's promise.

[Compare two creative directions](/projects/creative-challenge). Keep the theme ambitious and the number of game modes small.

## Design and engineering evidence

Compare two audience/presentation approaches and choose one. Write five compact stories for the required journey, sketch the responsibilities, and try one useful pattern compared with a simpler design. Run actual core, account/database and browser checks in your chosen stack. Keep the AI expectation/result/next-time note in the same record.

Get a real peer to try a task. Record an issue, make a meaningful change and retest. [Architecture](/process/architecture) · [Quality](/process/quality) · [Project record](/templates/project-record).

## Explore the technology as you build

Architecture and a guided Docker introduction are planned for next week. Use the same application: explain its interface/backend/data boundaries, inspect a container setup and compare actual startup and checks. Keep persistent data outside a disposable container and credentials outside the image. Record what Docker makes easier and what it does not solve. Exact lesson timing and required evidence will be confirmed in Canvas.

## Four reviews, one application

| Review | New evidence |
| --- | --- |
| **1 · Plan** | Two concepts, audience, Dream/Promise/Experiment, chosen stack, five stories and a rough account/game/data sketch. |
| **2 · First slice** | Sign up/sign in, play one correct game, save a result and sign out; independently expected tests and a design experiment. |
| **3 · Integrated build** | Private dashboard, persisted history and account maintenance connected; ownership, failure and regression checks; A/B choice and AI experiment result. |
| **4 · Improve/handoff** | Real peer issue → change → retest; reproducible setup, current CI and an explanation of the final design and AI learning. |

Both middle reviews develop Build. Studios link the focused account/game and integration checks already in this record. [Section dates](/course/schedule).

## Keep the baseline separate

The already posted [RPS-001](/projects/studios#rps-001-posted) still requires its supplied Python app and excludes accounts/scores/storage **for that assignment**. This final-game brief is later work. Preserve the completed baseline and original evidence; reuse it where useful.

[Bot Lab](/examples/bot-lab) demonstrates a game core and Strategy, not the complete account-based final project. A failed optional experiment can show good judgment; the required account/game journey still needs to work.

</details>
