---
outline: [2, 3]
---

# RPS Bot Lab: a bigger idea, a small reliable slice

**Dream:** a game lab where people discover how an opponent predicts them. **Game-core slice:** choose one of two bots, play a first-to-two match, see why each round happened, and reset. **Experiment:** can a frequency-based bot exploit a player's habits?

<a href="/is218-studio/examples/bot-lab/a.html" target="_self" data-native-route="true">Play the Bot Lab →</a>

This is an authored, runnable teaching reference. It is not a real student's submission, a claimed human review, or a completed Python RPS-001 assignment. Its checks demonstrate the browser game's logic. **The expanded final project still needs login, saved scores, a private dashboard and account maintenance.** [See the full journey](/projects/game-app). Those features are not implemented in this preview.

## Try it before reading the code

1. Against **Clockwork**, choose rock, then scissors, then rock. Expect a tie, a win, and another win. The score ends at 2–0; another click must not add a round.
2. Reset. Switch to **Habit Reader** and choose rock, then scissors. Its second move counters your earlier rock. Your new choice beats its guess.
3. Change bots during a match. The scores and history should clear. A new match should not remember your old habits.

The second bot is a **deterministic frequency heuristic**, not a trained model or LLM. It sees only completed rounds. No account, data storage, API key, or external model is involved. Its failure when you change habits is part of the experiment.

## How the idea stays manageable

| Keep reliable | Explore separately | Leave out of this slice |
| --- | --- | --- |
| Standard nine RPS outcomes; first to two; ties; clear choices/results; reset; keyboard controls. | Compare a fixed cycle with a habit guess. Change how the bot explains its decision. | Accounts, online multiplayer, camera gestures, a tournament service, and claims about learning outcomes. |

You could imagine a sci-fi duel, a museum exhibit about prediction, or a coaching tool. Keep the first playable promise small enough to finish and check. This slice can be built and tested before connecting the required account/backend journey.

## One useful pattern, three small modules

<ArchitectureSketch bot-lab />

The **Strategy** idea means replacing one opponent function without rewriting the game rules. `playRound` receives a function; Clockwork and Habit Reader satisfy the same small contract. Tests can inject a fixed opponent to check the exact result. The bot cannot inspect the player's current choice because its input contains only earlier rounds.

The simpler alternative is one hard-coded opponent. That is reasonable for a single bot. Here, two genuinely different behaviors make the separate functions useful. We do not need a class hierarchy, database, event bus, or dependency injection library.

[Choose architecture for a reason](/process/architecture) · [Write checks that can catch a mistake](/process/quality)

## What is actually checked

Run from the repository root:

```sh
node --test docs/public/examples/bot-lab/test.mjs
```

**Actual result on November 3, 2026: 28 passing, 0 failing, 0 skipped.** Tests cover all nine outcomes, invalid input, scoring/ties, both win paths, reset, extra actions after the end, immutable transitions, strategy injection, bot selection, and the deliberately wrong habit prediction. Expected rule answers are literal values independent of the implementation's rule lookup.

The [separate browser receipt](https://github.com/kaw393939/is218-studio/blob/main/docs/public/examples/bot-lab/TEST-NOTES.md) records actual keyboard, focus, reset, strategy and phone-width checks by an assistant operator. Neither those nor the automated checks establish a real classmate's understanding. Use the three tasks above in a browser, then ask a classmate to try without coaching. Record an actual issue, meaningful change, and retest for your own project. Do not copy an imagined review as evidence.

[Source and test files](https://github.com/kaw393939/is218-studio/tree/main/docs/public/examples/bot-lab) · [Exact logic check receipt](https://github.com/kaw393939/is218-studio/blob/main/docs/public/examples/bot-lab/TEST-NOTES.md)

## Use AI to test the idea, then judge the result

Try asking an agent: “Suggest three ways to make RPS feel like an opponent lab. Keep the rules fixed. For each, name a one-match promise, an uncertain experiment, and a test that could expose a mistake.” Choose the idea you want to explore; the agent does not choose your ambition for you.

Then inspect what actually happens. Did it implement the agreed rules? Did it peek at your current move? Did a test use the same broken function as its expected answer? Did it add an account system before a match worked? Those are useful findings to record **if they occurred in your work**. This reference does not invent an agent failure history or human feedback.

Your reflection can be four short statements in the existing project record: **I hoped… / I tried… / The evidence showed… / Next time I would…** An ambitious experiment that disappoints can still teach you something. Explain the result and deliver the reliable slice you promised.

[Return to individual project](/projects/individual) · [See the worked project records](/examples/individual) · [Copy the existing project record](/templates/project-record)
