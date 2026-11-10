# Your Creative Extravaganza: a useful application with a real account journey

**Imagine an application you want to make. Finish a small version that someone can sign into, use, return to and manage.** A game is optional: choose RPS, another simple game or a useful bounded non-game workflow without prior approval. Any language, framework or engine is welcome when it supports the required behavior and meaningful tests.

The final-project review assignments are published in Canvas for both sections. Follow your [section's review links and dates](/course/schedule); the posted RPS-001 task stays unchanged.

## Start with one useful idea

Two rough directions help you choose. Build **one** finished application/account flow; shared code and assets are fine.

[Try the complete game reference](/examples/full-game), then choose a theme, opponent or interaction that interests you. A campus event shortlister or equipment-request planner can also work. Sketch two possible first screens. Your own code and checks will grow from that choice.

For research, inspect the [AI Game Lab notebook](https://kaw393939.github.io/is218-individual-game/) and its [repository](https://github.com/kaw393939/is218-individual-game). It is an instructor research/planning example, not a completed game or required engine choice. Investigate your own concepts, compare original sources and turn your decisions into a specification. Its narrower exploratory scope does not replace the complete account/core-task journey below. [All research examples and how to use them](/course/research-examples).

## Plan: publish your programming research

Present your existing research and specification as a browsable programming research website, linked to its repository and your separate career research site. The [two-site research guide](/course/research-examples) explains the content and matching Plan submissions. Research sites are due at Plan, not finished applications. Present to a partner and carry useful GitHub feedback into the same record.

## Required final experience

1. **Accounts:** sign up, sign in and sign out; useful error messages and server-enforced access.
2. **Core task:** a complete useful workflow with validated inputs, correct results and a clear way to repeat it. For games, provide clear rules, correct results and replay; preserve standard RPS outcomes if using RPS.
3. **Saved results:** persist results for the signed-in user; a refresh or new session does not erase them.
4. **Private dashboard:** show that user's relevant measures and recent results (wins/losses/ties or equivalent measures for games), including a useful empty state.
5. **Account maintenance:** edit your own display name and change your password using the current password. Handle sessions consistently after the change.

Keep other users' private results and account changes protected. Use a maintained authentication library/framework and synthetic test accounts. A visual login screen or browser storage alone cannot establish these behaviors. [Exact journeys and checks](/projects/game-app).

For a non-game idea, document how your chosen task maps to validated input, a meaningful saved result, private history/dashboard and account maintenance. No prior approval is needed. Keep the same security, persistence, tests, pattern experiment and engineering evidence; changing the theme does not remove the learning goals.

<details>
<summary>Planning, engineering evidence and the four reviews</summary>

## Keep three things in view

| Part | Your decision |
| --- | --- |
| **Dream** | The bigger experience and who would enjoy it: a sci-fi duel, accessible arcade, prediction exhibit or your own idea. |
| **Working promise** | One complete account → core task → saved result → dashboard → account-update journey. |
| **Experiment** | One uncertain creative idea to investigate with AI. Set a stopping point and keep a usable fallback. |

For example: a **Battle of the Bots** arena. A player signs in, chooses an opponent, finishes a short match, sees saved results and changes their display name. Reactive commentary is the experiment; a whole multiplayer league stays outside this term's promise.

[Compare two creative directions](/projects/creative-challenge). Keep the theme ambitious and the number of core workflows small.

## Design and engineering evidence

Compare two audience/presentation approaches and choose one. Write five compact stories for the required journey, sketch the responsibilities, and try one useful pattern compared with a simpler design. Run actual core, account/database and browser checks in your chosen stack. Keep the AI expectation/result/next-time note in the same record.

Get a real peer to try a task. Record an issue, make a meaningful change and retest. [Architecture](/process/architecture) · [Quality](/process/quality) · [Project record](/templates/project-record).

## Explore the technology as you build

Architecture and a guided Docker introduction are planned for next week. Use the same application: explain its interface/backend/data boundaries, inspect a container setup and compare actual startup and checks. Keep persistent data outside a disposable container and credentials outside the image. Record what Docker makes easier and what it does not solve. Exact lesson timing and required evidence will be confirmed in Canvas.

## Four reviews, one application

| Review | New evidence |
| --- | --- |
| **1 · Plan** | Published programming research site and repository, linked career research site; two concepts, audience, Dream/Promise/Experiment, chosen stack, five stories and a rough account/task/data sketch. |
| **2 · First slice** | Sign up/sign in, complete one correct core task, save a result and sign out; independently expected tests and a design experiment. |
| **3 · Integrated build** | Private dashboard, persisted history and account maintenance connected; ownership, failure and regression checks; A/B choice and AI experiment result. |
| **4 · Improve/handoff** | Real peer issue → change → retest; reproducible setup, current CI and an explanation of the final design and AI learning. |

Both middle reviews develop Build. Studios link the focused account/core-task and integration checks already in this record. [Section dates](/course/schedule).

## Keep the baseline separate

The already posted [RPS-001](/projects/studios#rps-001-posted) still requires its supplied Python app and excludes accounts/scores/storage **for that assignment**. This final creative-project brief is later work. Preserve the completed baseline and original evidence; reuse it where useful.

[Bot Lab](/examples/bot-lab) demonstrates a game core and Strategy, not the complete account-based final project. A failed optional experiment can show good judgment; the required account/core-task journey still needs to work.

</details>
