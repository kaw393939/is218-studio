---
outline: [2, 2]
---

# Dream bigger. Build a version you can explain.

**Imagine an experience you are not yet sure you can build. Use AI to explore it, then deliver one complete, tested version.** The goal is creative software and better engineering judgment—not the longest feature list.

For the creative work **after the baseline, you may choose any programming language or framework**. Choose tools you can run, test and explain. The already posted [RPS-001 assignment](/projects/studios#rps-001-posted) keeps its Python starter, exact scope, checks, rubric and deadline. A new stack does not replace that submission or change its grade.

## Keep three things in view

| Part | Your decision | Example: Battle of the Bots |
| --- | --- | --- |
| **Dream** | What larger experience would you love to make? | An arena where visitors discover how different opponents behave. |
| **Promise** | Which complete journey will your final version deliver? | Choose one of two opponents, play a short match, read the result and restart. |
| **Experiment** | Which uncertain idea will you investigate? | Can an opponent use recent moves in a way the player can understand? |

The promise needs a working interface, actual program behavior, meaningful tests and a clear finish. The experiment may succeed, change direction or be dropped. Write a **stop rule before starting**: “After 60 minutes, if I cannot explain its behavior and check one useful result, I will keep the reliable opponent and record what I learned.” Sixty minutes is an example, not a required work limit.

An ambitious plan with a small finished promise can be strong work. An unfinished promise is not rescued by a long feature list or by saying AI failed.

## Find an idea that feels like yours

Choose, combine or replace these ideas. You choose the project; AI helps you explore possibilities.

<details>
<summary>Seven ways to make RPS feel much bigger</summary>

| Challenge | A finishable promise | One optional experiment |
| --- | --- | --- |
| **Story tournament** | Three duels in one illustrated story, with a clear ending and restart. | Try a branching scene without losing track of match state. |
| **Battle of the Bots** | Two opponent strategies, a short match and a readable move history. | Compare a predictable opponent with one that uses recent moves. Explain what “learning” means here. |
| **Accessible arcade** | The same round works with labeled buttons and keyboard input; compare two layouts. | Explore a second input method while keeping a reliable fallback. |
| **Spectator showdown** | Two people take turns on one device; a spectator screen shows scores and the winner. | Prototype two-device play. Keep local play if connection or shared-state behavior remains unreliable. |
| **Gesture stage** | Buttons control a polished game that looks like a physical arcade. | Investigate gesture input; ambiguous or unavailable input must not silently choose a move. Camera control is optional. |
| **RPS learning coach** | A losing round explains both moves and the rule; replay is easy to find. | Compare two teaching approaches using the same task. A rule-based explanation can be enough. |
| **Strategy and fairness lab** | A small reproducible simulation compares opponents and explains the counts. | Explore a visual explanation of predictability. A small sample does not establish that a strategy is universally fair or best. |

These are creative directions, not seven assignments. One scene or one short match can communicate a much larger world. A story, opponent or interaction can be imaginative without a live AI API.

</details>

<details>
<summary>Four alternatives: other games and non-game applications</summary>

| Idea | Keep the core bounded | Meaningful checks |
| --- | --- | --- |
| **Tic-tac-toe coach** | One board, legal turns, win/draw detection and restart. | Occupied cells, winning lines, draws and moves after the game ends. |
| **Memory-match experience** | One small deck and a theme, story or learning purpose. | Matching/mismatching pairs, repeated clicks, completion and reset. |
| **Campus event shortlister** | Synthetic events, a few preferences and an explanation of the shortlist. | Matching rules, unsupported preferences and no matching events. |
| **Equipment-request planner** | One request journey, validation and a truthful pending status using synthetic data. | Missing information, incompatible selections and the difference between a request and a confirmed booking. |

Another idea is welcome. Give it an identifiable user, real program behavior, a changing state and a checkable end-to-end task. Agree how any separately posted Studio skills fit before replacing their work.

</details>

## A 25-minute idea workshop

1. **5 minutes · Start with yourself.** Write an interest, an experience you wish existed and something you think is beyond your current ability.
2. **5 minutes · Interview with AI.** Use the prompt below. Answer its questions before reading the pitches.
3. **5 minutes · Compare two.** Pick two pitches you find interesting. Compare their audience, interaction, largest unknown and smallest convincing demonstration. You make the choice.
4. **10 minutes · Make the choice testable.** Write the Dream / Promise / Experiment, sketch the main journey and predict one success and one failure result. Give the experiment a stop time and fallback.

```text
Help me discover an application I would care about making.
First ask me three short questions about my interests, the experience
I want to create, and the time/tools I have. Wait for my answers.

Then suggest three ambitious, distinct pitches. Include a surprising
RPS direction and a non-game option. For each, give a user, a memorable
interaction, a small complete version, and one technical uncertainty.

Help me compare two pitches I select. Challenge your own assumptions
and suggest the cheapest useful experiment. I choose the final idea.
Do not assume generated code works; ask how we could establish that.
```

AI can also propose architecture or tests. You still decide which boundaries help, predict expected behavior and examine what the code actually does. [Architecture and patterns](/process/architecture) · [Testing](/process/quality).

## Grow it through the same four reviews

| Review | What your creative project adds |
| --- | --- |
| **1 · Plan** | Two ideas, a selected promise, a small architecture sketch, checks and the experiment's stop rule. |
| **2 · First slice** | One new creative journey beyond the completed baseline; show working behavior, tests and a design decision. |
| **3 · Integrate** | The promised pieces work together. Compare approaches, record the experiment's actual outcome and get peer feedback. |
| **4 · Improve** | Resolve a meaningful feedback issue, retest, hand off the chosen version and explain what you would do differently. |

Keep short notes in your [existing record](/templates/project-record). No extra idea essay or full chat transcript. [Two filled AI-learning examples](/examples/agent-learning) show how a success and a disappointment can both improve your judgment. Follow Canvas for the actual posted requirements and dates.
