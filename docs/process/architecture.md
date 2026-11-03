# Make the idea testable

**Architecture is how the important parts fit together. A design pattern is a reusable approach to a recurring design problem.** Practice both in your chosen language/framework while building the creative experience.

## Trace one action

<ArchitectureSketch />

Sketch your actual app, then point to the matching code. For an RPS broadcast, a click becomes a move, the rules update the match, and the screen displays the result. Changing the headline should not change who wins. A failed network experiment should not destroy a local match that already works.

The sketch is a thinking tool, not a required set of servers, classes or folders. A small app can use a few functions/modules. [Fowler explains separating presentation, domain decisions and data access](https://martinfowler.com/bliki/PresentationDomainDataLayering.html).

## Try a pattern on a real problem

Choose **one actual pattern experiment**. Compare two approaches, try the design in code, and use checks to decide what to keep, refactor or remove. Explain the tradeoff. More pattern names do not earn more credit.

| Problem in your idea | An approach to explore | A useful check |
| --- | --- | --- |
| Opponents choose moves differently. | **Strategy:** replace the opponent-choice function without changing the RPS rules. | The same rule cases pass for either strategy; fixed histories give predicted moves. |
| Match or story actions depend on the current stage. | **Explicit states/transitions:** define what is allowed before, during and after a match. Explore the State pattern if behavior really varies enough to justify it. | A finished match rejects another scoring action; restart clears the right state. |
| Several controls or external services speak different formats. | **Adapter:** translate each input into the small action/data contract your core understands. | Keyboard and button actions produce equivalent core results; malformed input is rejected. |

A state machine can be a table or functions. It is not automatically the object-oriented State pattern. A Strategy can be a passed function; inheritance is not required. Start with the problem, then choose a form that fits your language and app.

[Microsoft: a Strategy pattern demonstration](https://learn.microsoft.com/en-us/shows/visual-studio-toolbox/design-patterns-strategy) · [Robert Nystrom's State chapter and state-machine examples](https://github.com/munificent/game-programming-patterns/blob/master/book/state.markdown).

## Ask AI to compare designs

```text
Here is my working promise and current code: [link/context].
Trace one user action through the parts. Where are rules and state owned?
Compare two designs for [specific problem]: a simple approach and one
useful pattern. Explain the benefit, extra complexity and likely failure.
Make the smallest experiment. Keep expected test results independent
of the implementation. I will inspect the diff and choose what to keep.
```

A generated class diagram is a proposal. Check whether the code follows it and whether the design makes a useful change easier to test. If AI adds layers you cannot explain, simplify and rerun the behavior checks.

## Keep a small evidence trail

At Plan, sketch the responsibilities and predict a result. At the first slice, show actual core tests and the pattern experiment. At integration, change or replace one part and rerun relevant checks. At Improve, show the peer-reported problem, fix and regression check.

Record **problem → alternatives → code tried → expected/actual check → keep/change/remove → next-time lesson** in the existing spec. Use your stack's automated test tools and record actual results. Follow the posted assignment for required CI; explain which checks run in CI and which require the target device or environment.

[Play Bot Lab and inspect its responsibilities](/examples/bot-lab) · [Test the right layers](/process/quality) · [Two agent-learning examples](/examples/agent-learning).
