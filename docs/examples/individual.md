---
outline: false
---

# Two individual project records

Start with one record that fits your current stage. Both identities and peer interactions are **fictional teaching scenarios**. Scores assess the written record and implementation evidence actually provided here, not the fictional person’s claimed execution. Imagined peer results earn no checked-evidence credit. These are not real Canvas grades or evidence of individual mastery. [How the proposed rubric works](/course/milestones#how-the-worked-examples-are-assessed).

The records are filled, but the course projects are incomplete. The examples focus on creative choices and show where actual implementation/review evidence is missing. A course submission must also satisfy its posted Studio brief. The public RPS preview implements a narrow browser-only game; it does not provide Python-server, authentication or CI evidence.

<details>
<summary>Example 1 · Leah's RPS Replay — a focused explanation-led game</summary>

## 1 · Understand and plan

**Need:** a new player can see a result but may not understand *why* paper beats rock. I want one round to teach the relationship without a long rules page. This is a hypothesis to check with a classmate, not a research result about all players.

**Two approaches:** A puts the choices first, with a short explanation beside the result. B puts a result overview first and the controls below. Both use the same nine outcomes and wording. I choose A provisionally because it starts the task sooner; I will compare both with the same losing round.

**Stories/checks:** a player can choose a move and see both choices; all nine fixed matchups match the assignment table; a losing result explains the relationship; a keyboard user can make another round. Defer scoreboards, sound, accounts and a new framework from this creative slice. Any later account/dashboard Studio follows its own future brief.

**AI/ownership:** AI may draft options and code; I predict outcomes, inspect the changes and explain tests. Keep these notes in the RPS `SPEC.md`.

## 2 · First working slice

The described slice handles one round through the existing core and interface. I compare the result to literal expected outcomes rather than asking the same winner function to generate its own expected answer. Starter checks alone do not establish the rules.

**Evidence to link in a real submission:** `game.py`, nine unit cases, a real request/result test, browser round/replay, the full local check, and the actual PR/CI revision. The static preview here is a separate teaching implementation; it cannot supply those receipts.

## 3 · Integrated build

**Fictional review task:** Rowan tries “rock against paper,” explains why it lost, then starts another round. Rowan finds the outcome but reads “you lose” as an unexplained judgment. I record **example issue L-03: explain the relationship in losing results**. This is a scenario label, not a fabricated GitHub issue URL.

In A/B, use the same moves and wording. Compare whether the rule and replay action are easy to find. Choose A for the next iteration, keeping B available as the alternate. Do not claim one observation proves a general conversion or learning effect.

## 4 · Improve and hand off

**Scenario response:** add the rule relationship, “Paper beats rock,” beside the losing result and keep both choices visible. **Scenario retest:** Rowan now explains the rule and starts a new round without coaching. A real student must obtain and record that human observation; this scenario is not peer credit.

The final record links the chosen/alternate version, exact source revision, setup, executed checks and limits. Later Studio requirements remain separately identified. A fresh setup and real course-server checks would still need evidence before calling the complete course application ready.

### Provisional assessment of the supplied packet

| Review | Complete /25 | Thoughtful /25 | Checked /25 | Understood /25 | Total | Specific feedback |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | 25 | 24 | 20 | 20 | **89** | The actual written scope/comparison are useful. User need remains a hypothesis; understanding is judged from writing only. |
| 2 | 15 | 23 | 10 | 18 | **66** | A browser implementation and narrow actual preview checks exist. Python server, full check and CI receipts are absent; listing expected evidence earns no execution credit. |
| 3 | 15 | 24 | 12 | 18 | **69** | The supplied A/B previews are coherent. They do not establish integrated course-backend behavior or real peer observation. |
| 4 | 12 | 24 | 8 | 18 | **62** | The reasoning is clear, but the human issue/change/retest is fictional and earns no peer-review evidence credit. Full application handoff/check receipts are missing. |

**What would raise the later scores:** supply the actual Python application and full local/CI receipts for the evaluated revision; complete a real peer task, meaningful change and retest; then explain the code independently.

<a href="/is218-studio/examples/rps/a.html" target="_self" data-native-route="true">Try the authored A preview</a> · <a href="/is218-studio/examples/rps/b.html" target="_self" data-native-route="true">Compare B</a>.

</details>

<details>
<summary>Example 2 · Omar's Gesture Coach — promising work with evidence gaps</summary>

## 1 · Understand and plan

**Need:** a visitor at a small game display needs to play without a tutorial conversation. I initially wrote “make it fun,” which is too vague to check. I revise it to “choose a move, understand the result, then replay with keyboard controls.”

**Two approaches:** A uses familiar word buttons; B adds gesture illustrations with the same text labels and rule logic. Choose A first because a missing illustration should not prevent playing. Defer sound and animation. The two approaches do not require two servers or different rules.

My initial stories omit error behavior. Feedback on the plan should ask what happens when the server receives an unsupported choice and what an actual test would assert. This follows the existing RPS requirement rather than adding an unrelated feature.

## 2 · First working slice

The described happy path shows moves and a result. The initial test only checks that the page opens. That would pass even if rock always wins. Replace it with literal outcomes and keep the supplied negative checks. A replay check should show a genuinely new independent round.

The record says AI helped draft the result component. It must also say which code Omar inspected and which actual output he compared to an independent expectation. “AI tested it” is not a check receipt.

## 3 · Integrated build

**Fictional peer task:** Priya tries a losing round and uses only Tab/Enter to replay. The replay control is difficult to locate, and the record's screenshot does not establish keyboard behavior. Log **example issue O-02: give replay a clear labeled control and visible focus**.

The first A/B comparison changed wording, images and button order at once. I narrow it to text versus labeled gesture presentation with the same order and task. That makes the reason for the choice easier to explain.

## 4 · Improve and hand off

**Scenario change:** move a clearly labeled “Play another round” control next to the result and retain a visible focus state. **Scenario retest:** Priya locates it and begins again. This is fictional; actual classmates must supply the real review evidence.

The handoff still lacks a fresh-environment result and the full server/browser/CI receipts. Mark those **pending**. Do not call the static preview a passing Python assignment or invent a successful run. The useful next action is one reproducible check, not another new feature.

### Provisional assessment of the supplied packet

| Review | Complete /25 | Thoughtful /25 | Checked /25 | Understood /25 | Total | Specific feedback |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | 20 | 18 | 12 | 17 | **67** | The actual written task is concrete. Add rejected-input checks and evidence for the visitor need. |
| 2 | 5 | 20 | 0 | 12 | **37** | No Gesture Coach implementation or executed test receipt is attached. The described happy path is a scenario, not code evidence. |
| 3 | 5 | 18 | 0 | 12 | **35** | No actual integrated build, keyboard check or CI result is provided. A proposed comparison does not establish success. |
| 4 | 5 | 20 | 0 | 12 | **37** | The change/retest is fictional. It illustrates a useful next action but earns no actual improvement or human-review credit. |

**What would raise the score:** attach a working application, run discriminating tests at the actual revision, and get a real classmate to try and retest the replay task. Extra visuals or a longer reflection do not replace that evidence.

</details>

[Copy the short record](/templates/project-record) · [Review another person's work](/process/collaboration) · [See the group examples](/examples/group).
