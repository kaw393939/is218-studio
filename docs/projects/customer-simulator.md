# Meet your simulated customer

**Practice the conversation before building the software.** Your team interviews an AI customer, compares two scopes and agrees on one small application. The customer has a prepared need and one later change request. You still make the engineering decisions.

<a href="/is218-studio/kits/fde-customer/is218-fde-customer-kit.zip" target="_self">Download the customer kit</a> · <a href="/is218-studio/kits/fde-customer/AGENTS.md" target="_self">Read AGENTS.md</a>

## Start in five minutes

1. Unzip the kit into your team's local project as `customer-kit/`. Keep one shared copy of the selected scenario and customer notes in the team repository.
2. Open the project with your usual AI coding agent. Ask: **“Read customer-kit/AGENTS.md. Start customer mode and help us choose a scenario. Ask one question at a time.”**
3. Choose the scenario together. Interview the customer about its need, users, data, status changes and constraints. Compare its two scope options and propose **three to five checkable stories**.
4. Review and save the agreement in `customer-kit/CUSTOMER-NOTES.md`, then link it from your spec. Choose your stack, architecture and division of work as a team.
5. Say **“Exit customer mode”** to plan or code with the agent. Later say **“Resume customer mode; read our notes”** to continue the same customer's conversation.

The character is a **simulation**, not a real client or a report of market research. It can confirm the fictional customer's scope. Only actual checks establish implementation behavior; only real peer sessions establish human feedback.

## Choose one situation

| Customer | One useful workflow | Two bounded options |
| --- | --- | --- |
| **Bench & Bolt · repair shop** | Log a repair inquiry, review it, and track its status. | Walk-in intake queue, or self-service inquiry plus the same review queue. |
| **Harbor Helpers · volunteer organization** | Request a shift, review capacity, and record confirmation. | Coordinator-assisted signup, or volunteer request plus coordinator approval. |
| **Clear Shelf · clinic supply desk** | Request nonclinical supplies, review the quantity, and record fulfillment. | Staff intake queue, or departmental request plus coordinator review. |

All use synthetic fixtures, persistent records and explicit states. They do not need live integrations. The clinic scenario contains **no patient, diagnostic or clinical data**. The kit's scenario files contain the full facts and acceptance checks; they are references, not secret assessment answers.

## Use the change request without scope creep

After a working slice, ask the customer for its one change. It stays within the selected workflow. Explain the effect on a story, data, tests and remaining time; agree to implement or defer it with a reason. **Do this before the protected finishing week.** If you first reach the change during that week, record it as deferred and finish the agreed promise. The character cannot add surprise requirements or move a deadline.

At the end, use the kit's acceptance prompt. Show actual evidence, name gaps and distinguish **accepted for the fictional need**, **technically verified**, and **tested by a real peer**. These are separate claims.

## Keep the work small

The kit is a conversation guide, not another graded project, a complete app or an automatic grader. Keep decisions in the same evolving spec and customer notes; no transcript is needed. A refusal or “yes” is not a student's explanation. Missing decisions stay **Pending**.

<a href="/is218-studio/kits/fde-customer/README.md" target="_self">Kit instructions</a> · <a href="/is218-studio/kits/fde-customer/FACILITATOR-CHECK.md" target="_self">Three scenario walkthroughs and limits</a> · [Group brief](/projects/group) · [Review routine](/process/collaboration) · [Dates](/course/schedule).
