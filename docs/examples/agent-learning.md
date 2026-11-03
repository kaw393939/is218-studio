---
outline: [2, 2]
---

# What did you learn from building with an agent?

These fictional notes concern **creative-core experiments**. They do not demonstrate the final application's required account, saved-score, dashboard or maintenance work; use [the full app contract](/projects/game-app) for that scope.

**Explain the gap between what you expected and what happened.** A successful feature and an abandoned experiment can both teach you something useful. Neither replaces a working project promise, meaningful checks or your own understanding.

The students, builds, observations and results below are **fictional teaching scenarios**. No experiments or tests were executed for these records, and no code, CI receipts or real peer evidence is attached. They model concise notes; they do not establish that an application passed. Your submission needs actual evidence at its actual revision.

## Choose one example to read

| Example | What the student learns |
| --- | --- |
| **Mina · Success** | A simple, explainable opponent can create an ambitious experience. |
| **Jonah · Disappointment** | A convincing multiplayer demo can still have broken shared state. |

<details>
<summary>Example 1 · Mina's Battle of the Bots — a surprising success</summary>

**Mina's Battle of the Bots:** I want a playful arena where someone can discover an opponent's habits. My promise is two opponents, one short match, understandable results and restart. My stretch experiment is an opponent that remembers recent moves. I keep the core RPS rules separate from opponent choice.

| Note | Filled fictional record |
| --- | --- |
| **Expectation** | I thought a “learning opponent” would require a trained model or a paid API, so it seemed beyond me. |
| **Prediction before building** | A simpler opponent could count the player's recent moves, predict the most frequent one and choose its counter. For history `rock, rock, paper`, I predict `paper`. An empty history needs a defined fallback. |
| **Agent task** | I asked the agent to propose two small strategies and explain how each would fit behind the same opponent interface. I chose recent-frequency behavior and kept the existing rule evaluator. |
| **Observed result in the scenario** | The prototype produces the predicted counter, and the game can switch opponents without rewriting round results. The first explanation calls the opponent “intelligent,” which overstates a simple counting rule. I change the wording to “responds to your recent moves.” |
| **Test and expectation** | Fixed history above → `paper`; empty history → documented fallback; tied counts → documented tie-break; the same nine rule outcomes remain unchanged for either opponent. An end-to-end check plays a short match and restarts with cleared history. In a real submission I must link the actual test code, command, revision and results; this scenario supplies none. |
| **Design / architecture decision** | Compare branching throughout the game with one replaceable `choose_move(history)` operation. Choose the latter so opponent variation does not change the winner rules. This is a useful Strategy-style boundary; the number of classes is not the goal. |
| **Kept / dropped** | Keep two predictable strategies and an honest explanation. Drop a live model call: it adds no needed behavior to this promise. The experiment becomes part of the finished journey because its behavior can be checked. |
| **Next time** | Define “learning” before asking for implementation. Write the empty-history and tie-break expectations first. Ask AI for the simplest explanatory mechanism before assuming a model is necessary. |

**Why the reasoning helps:** Mina makes an ambitious experience achievable by identifying the behavior she actually needs. A real assessment would still need the implementation, executed checks, human feedback and her own explanation.

</details>

<details>
<summary>Example 2 · Jonah's Spectator Showdown — a disappointing experiment</summary>

**Jonah's Spectator Showdown:** My dream is a live RPS tournament on everyone's phones. My promise is a complete two-player pass-and-play match on one device, a spectator result screen and restart. My experiment is two-device play. I set a 60-minute investigation limit; if shared state is unreliable, the local promise remains the final version.

| Note | Filled fictional record |
| --- | --- |
| **Expectation** | The agent described two-device play as a small addition. I expected it to be mostly a connection feature. |
| **Prediction before building** | Both clients should see one round result, and one round should change the score once. A late or repeated submission must not create a second result. Restart should create a new match without old moves. |
| **Agent task** | I asked it to extend my local prototype into a room-based game. My request did not specify who owns the result or when a round becomes final. |
| **Observed result in the scenario** | The first demonstration looks impressive. When I submit from both views quickly, the score changes twice and the screens disagree after restart. I cannot yet explain how clients agree on the current round. I stop the experiment at the agreed time. |
| **Test and expectation** | Submit both moves for the same round → exactly one committed result; repeat a submission → no second score change; submit an old round after restart → reject it. The scenario's prototype fails these expectations. These are fictional observations, not executed test receipts. My real local version would still need its own rule, turn, completion, repeat-click and restart checks. |
| **Design / architecture decision** | The generated prototype lets each client update its own authoritative score. A shared game needs one agreed owner of match state and explicit round identifiers/transitions. I record that architecture gap rather than adding more event handlers I cannot explain. For this local game-core slice, one match-state component owns turns and results; the spectator view only displays them. |
| **Kept / dropped** | Keep the local tournament, spectator view and clear results. Drop network play from this release and label it experimental. I do not call a local game “working online multiplayer.” |
| **Next time** | Ask AI to map state ownership before writing connection code. Prototype one round across two clients first, including repeated and out-of-order events. Make it pass those checks before adding tournament screens. |

**Why the disappointment helps:** Jonah learns that a convincing demo does not prove consistent behavior. Stopping the experiment protects a complete promise; it does not excuse unfinished local functionality. A failed stretch experiment alone is not a failing project or evidence of a completed one.

</details>

## Your version can be six short lines

In the [same project record](/templates/project-record), write: **what I expected → what I predicted → what happened → what I checked → what I kept or changed → what I would do differently.** Link the relevant issue, code and real results. Add the architecture decision where it explains the outcome.

You do not need to manufacture disappointment, praise AI or paste a conversation. Be specific about your decisions and the evidence. [Choose a creative challenge](/projects/creative-challenge) · [Architecture and patterns](/process/architecture) · [Check your work](/process/quality) · [Use AI with ownership](/process/ai).
