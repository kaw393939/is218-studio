---
outline: false
---

# Two group projects, four reviews each

**Earlier workflow drafts:** these written examples illustrate work division and review, but do not complete the updated group task. Start with [the prepared customer menu](/projects/customer-simulator), record the selected character and discovery, and implement its agreed persistent workflow. The static previews below have no such backend or completed customer interaction.

Read one record first. Notice how a small workflow grows through four reviews, rather than becoming four separate projects.

**Everything about these teams, classmates, issue numbers, check results and conversations is fictional.** These are filled teaching scenarios, not reports of real collaboration or completed student work. Scores assess the actual written packet, available preview and executed preview notes; fictional team/peer claims earn no execution or human-review credit. They use the [proposed future-review rubric](/course/milestones#how-the-worked-examples-are-assessed); they are not official grades or changes to the current RPS rubric.

DeskReady has an actual static preview. Its <a href="/is218-studio/examples/TEST-NOTES.md" target="_self" data-native-route="true">executed preview checks</a> are separate from the fictional team's evidence. The preview cannot establish server, persistence, CI or human-review completion. ClubKit is a written scenario with no working application attached.

For your project, replace these stories with links to **your actual work** and observations from a **real classmate**. Start with one useful path, compare two manageable options, and record one meaningful feedback change and retest.

<details>
<summary><strong>DeskReady — a clear request with an honest status</strong></summary>

## DeskReady: filled record, incomplete course application

**People and need.** Avery Cole and Samir Patel imagine a student organizer requesting space or presentation help. Preferred windows are requests, not reservations. All data is synthetic. No payments, accounts or email.

### 1 · Understand and plan

We compared **A: form beside receipt/history** with **B: process overview first, history below**. Same rules; we chose A because users can compare their request with its receipt. Our three checks: missing service/window prevents creation; valid input returns a reference marked **Pending review**; a second request appears first in history with matching status. Browser memory resets on reload.

### 2 · First working slice

We specified service → window → optional note → receipt. Avery validates choices; Samir labels the receipt. The check sheet compares expected values. Empty input must leave history unchanged. Notes are plain text, limited to 240 characters.

### 3 · Integrated build

Review task: “Request a project table in the afternoon. Can you tell whether it is booked?” Fictional classmate Riley reads “Received” as confirmation. Issue **DR-7** records the wording problem and expected behavior: receipt and history must both say **Pending review**, followed by “No booking has been made.”

### 4 · Improve and hand off

We replace the ambiguous wording and repeat Riley's task. Riley finds the matching status and explains that follow-up is required. The handoff includes setup, memory-reset limits, the decision table, issue/change/retest and each contribution. AI suggested label alternatives; the team checked them against the spec. Persistence remains outside scope.

| Member | Design and development | QA and review |
| --- | --- | --- |
| Avery | Form wording, validation and errors | Check Samir's reference/status/history ordering |
| Samir | Receipt, status and request history | Check Avery's missing/valid/unsupported inputs |
| Both | Compare layouts, integrate, document limits | Full-path review; explain their own code |

### Proposed assessment of the supplied packet

Each criterion is out of 25.

| Stage | Complete | Thoughtful | Checked | Understood | Total | Feedback |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Understand/plan | 25 | 24 | 20 | 20 | 89 | Actual written scope/checks are specific; user/partner findings remain hypotheses and understanding is written only. |
| First slice | 18 | 24 | 16 | 18 | 76 | Actual static logic/browser checks cover validation and receipts. No course backend, CI or real teammate implementation is supplied. |
| Integrated build | 16 | 24 | 14 | 18 | 72 | A/B previews share a coherent path, but memory-only behavior cannot establish stored requests or a full integrated application. |
| Improve/handoff | 12 | 24 | 8 | 18 | 62 | The human issue/change/retest is fictional; no peer-review credit is awarded for it. Actual partner contributions and full-system handoff remain missing. |

**What would raise the later scores:** provide the approved backend/integration and real CI receipts, show both teammates’ actual contributions, and record a real peer task, change and retest.

**Try the actual browser-only preview:** <a href="/is218-studio/examples/deskready/a.html" target="_self" data-native-route="true">selected A</a> · <a href="/is218-studio/examples/deskready/b.html" target="_self" data-native-route="true">alternative B</a>. These scores apply only to the actual supplied teaching packet and its visible gaps; they do not turn the fictional peer story into evidence.

</details>

<details>
<summary><strong>ClubKit — a useful inquiry with evidence still missing</strong></summary>

## ClubKit: developing fictional scenario

**People and need.** Leila Morgan and Owen Ruiz imagine a club officer asking to borrow presentation equipment. Scope: choose microphone/projector, select a time window, add a synthetic note, receive an inquiry reference. No inventory guarantees, payments, emails or authentication.

### 1 · Understand and plan

**A** lists equipment in two selectable cards; **B** uses one labeled dropdown. Same rules. We select B: two choices do not need a catalog. Stories: missing equipment/window blocks a request; a valid request gets a **Pending review** receipt; history shows the latest reference and status. Our spec initially omits coordinator needs and reload behavior.

### 2 · First working slice

Leila makes the equipment/window form; Owen builds the receipt. A projector request produces a reference and visible values. Their first check repeats only the happy path. The button says “Reserve,” although the product can only create an inquiry. Feedback: change the promise and test missing values before adding styling. The failure path remains unverified.

### 3 · Integrated build

History is connected, newest first. Fictional reviewer Casey tries a microphone inquiry and asks, “Where can I find the one I just sent?” Issue **CK-4** notes that history is below an oversized introduction; the team moves its heading beside the receipt and adds the reference there. They also replace “Reserve” with “Create inquiry.” The record omits second-request and unsupported-input checks.

### 4 · Improve and hand off

Casey repeats the task and finds the reference without prompting. Receipt/history now agree on **Pending review**. The team documents memory-only behavior and removes an unsupported “saved securely” claim. AI helped draft form code; each member explains their own event and rendering functions. Handoff still lacks a clean-start setup check and evidence for invalid input. Finish those before calling it ready.

| Member | Design and development | QA and review |
| --- | --- | --- |
| Leila | Equipment wording, form and input rules | Review Owen's receipt/history labels and order |
| Owen | Receipt/history hierarchy and rendering | Review Leila's missing/unsupported selections |
| Both | Compare layouts and integrate one path | Joint task/retest; add missing evidence |

### Proposed assessment of the supplied packet

Each score is out of 25. Lower scores identify missing evidence.

| Stage | Complete | Thoughtful | Checked | Understood | Total | Feedback |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Understand/plan | 20 | 18 | 12 | 17 | 67 | The actual written plan needs coordinator/reset/failure checks and source support. |
| First slice | 5 | 20 | 0 | 12 | 37 | No ClubKit code or executed check is attached; the described receipt is not a working submission. |
| Integrated build | 5 | 22 | 0 | 12 | 39 | No actual integration, partner contribution or test receipt is supplied. The proposed fix receives reasoning credit only. |
| Improve/handoff | 5 | 23 | 0 | 12 | 40 | The retest is fictional and earns no checked-evidence credit. Provide actual implementation and real peer results. |

**What would raise the score:** attach the working implementation, check valid/invalid requests and status history, verify setup, and document actual partner work and a real peer change/retest. **No ClubKit application or human review is attached.**

</details>

[Use the review routine](/process/collaboration) · [Copy the project record](/templates/project-record) · [Return to examples](/examples/)
