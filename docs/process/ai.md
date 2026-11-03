# Explore with AI. Own the result.

Use AI to discover an idea that excites you, then investigate how well agent coding helps you build it. You may use any language or framework for the creative project. Keep the [Dream, Promise and Experiment](/projects/creative-challenge) distinct.

## Find an idea before requesting code

Try this prompt, then make your own choice:

```text
Help me discover a creative IS218 project. Ask about my interests,
experiences and skills before suggesting code. Offer three contrasting
ideas: an imaginative RPS experience, another simple game, and a useful
non-game workflow. Any language or framework is possible.

For each, describe an ambitious dream, a small finishable promise,
and an uncertain experiment. Suggest what I could test and one design
decision worth comparing. Explain the tradeoffs; do not choose for me.
```

Compare two promising directions. Keep the one you want to investigate, with a scope you can explain. An impressive pitch is still an assumption until you try it.

## Build in steps you can evaluate

1. **Predict:** state what you expect the agent to produce and how you will know.
2. **Plan:** give it the agreed slice, current context and boundaries. Ask it to explain an [architecture or pattern choice](/process/architecture) before adding complexity.
3. **Inspect:** read the actual diff. Identify the rules, inputs and outputs you now need to understand.
4. **Check:** run tests with independently expected answers and try the experience yourself.
5. **Decide:** keep, revise or reject the result. Link the actual change and checks through the required issue/PR process.

Practice one small pattern experiment in your chosen app. Compare two approaches, try the pattern in code and explain whether you kept, refactored or removed it. A function-based Strategy can be enough; an elaborate class hierarchy may make things worse.

## Record a useful success or disappointment

Add a few lines to the **existing project record**:

| Expectation | Actual result and evidence | Success or disappointment | Next time |
| --- | --- | --- | --- |
| AI would create two different opponents. | Both used the same rule; a fixed-input test exposed it. | The interface looked different, but the promised behavior was missing. | Specify the two behaviors first and test the strategy boundary before polishing the screen. |

Use your actual experience. A failed optional experiment can show strong judgment when you investigate it and explain a better approach. An unfinished promise still loses completion credit. A large generated application is not proof you understand it. See [two learning examples](/examples/agent-learning).

Keep notes short; this is part of the record, not another essay or a prompt transcript. Credit starter code and AI help. Mark unrun checks honestly and keep private data and credentials out of prompts and public work.

## A fictional customer can help ask questions

You can place a brief in `AGENTS.md` to roleplay an audience or customer. For example:

```markdown
## Fictional customer roleplay
You are a simulated campus service owner, not a real customer or reviewer.
Need: A student must submit a complete request and understand its status.
Constraints: Use synthetic data. A request is not a confirmed booking.
Ask about the audience, failure cases and smallest useful experience.
Label new details as assumptions. Ask how the student will test the claim.
```

Roleplay can expose questions. It does not establish research, real peer feedback or customer acceptance, and does not override actual course or repository rules. Get [feedback from people](/process/collaboration).

## Current RPS-001 remains bounded

Follow the supplied README/AGENTS checkpoints, Python environment and full `check.py` workflow. Keep the nine outcomes literal and independent. Scoring, accounts, storage, a new framework and an AI API remain outside that posted task. [Exact RPS-001 requirements](/projects/studios#rps-001-posted).
