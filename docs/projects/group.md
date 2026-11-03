# Group Customer Studio: build for a simulated customer

**Act as a small FDE team: understand a customer's problem, agree on one useful workflow, then build and check it.** Your customer is an AI character with a prepared business situation. Your teammates and peer reviewers are real people.

Choose one industry scenario in the [customer simulator](/projects/customer-simulator): a repair shop, a volunteer organization or a clinic's nonclinical supply desk. The kit has an `AGENTS.md` file to start the customer conversation in your own agent. No API integration is needed. All organizations, people and records in the kit are fictional.

## One workflow, any language or framework

Compare two feasible approaches with the customer. Agree on **three to five stories**, the data and allowed status changes, and clear success/failure checks. Build a real program that saves the workflow's records and keeps their status consistent after restart. A decorated form or browser role selector does not establish the finished workflow.

Choose any language/framework you can run, test and explain. Use synthetic data. Keep the scope small: no payments, live customer data, automated messages or external integrations unless specifically agreed and manageable. A submitted request is **pending**, not a confirmed repair, volunteer place or fulfilled supply order.

## Share design, development and QA

| Member | Example useful slice | Cross-review |
| --- | --- | --- |
| A | Request form, validation and clear success/error states; matching implementation and tests. | Try B's queue and status changes, including a rejected transition. |
| B | Coordinator queue, status/history and persistence; matching implementation and tests. | Try A's valid, missing and unsupported inputs. |
| Both | Discover the need, compare designs, agree stories, integrate early and explain their own work. | Rotate owner/reviewer roles; test the full path and record real findings. |

For a trio, split a third coherent slice such as review/history and rebalance the effort. Everyone makes design decisions, implements meaningful work and checks someone else's work. Compare effort and responsibility; commit counts do not measure equal contribution.

Sketch the actual architecture and try **one useful pattern** against a simpler design. A validator strategy or workflow state boundary can provide a real design question. Use meaningful automated tests and record the AI suggestion, your inspection and what you would do differently. [Engineering guide](/process/architecture).

## Four reviews, one shared record

| Review | New evidence |
| --- | --- |
| **1 · Plan** | Selected customer; two scope options; agreed three to five stories; data/status rules; architecture; owners and reviewers. |
| **2 · First working slice** | One stored request flows into the coordinator queue. Real positive/negative checks; actual design/pattern experiment and member contributions. |
| **3 · Integrated build** | Agreed workflow works across its parts. Respond to the kit's one bounded customer change, or record a justified deferral. Freeze new scope before the protected finish week. |
| **4 · Improve and hand off** | Real peer issue → meaningful change → retest. Reproducible setup, selected revision, checks, limits and a customer acceptance conversation grounded in actual evidence. |

Keep one shared repository and evolving spec. `customer-kit/CUSTOMER-NOTES.md` records the simulated customer's agreements; link it from the [project record](/templates/project-record) instead of repeating it. An AI customer's approval is a simulated scope decision, not proof that code works or a real person finds it usable.

Give a real classmate a task without coaching. Record what happens, respond in a GitHub issue, make a meaningful change and retest. The customer simulation cannot replace that review or genuine team collaboration. [Review routine](/process/collaboration).

## Examples and dates

[DeskReady and ClubKit](/examples/group) are earlier, partial teaching records. Their static previews illustrate wording and A/B design; they do **not** meet the new customer kit's stored-workflow contract. Use the kit's stories and your own executed checks for your project.

[Start the customer simulator](/projects/customer-simulator) · [Section dates](/course/schedule). Future dates and grading arrangements remain planned until posted in Canvas; the current RPS-001 assignment is unchanged.
