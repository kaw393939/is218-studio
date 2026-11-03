# Use AI and keep ownership of the result

**AI can help you build; you still need to explain the decision and check the output.** Use small steps rather than asking for the whole project at once.

## A useful working loop

1. **Try:** inspect the current app and predict one result yourself.
2. **Decide:** agree the small spec and what is out of scope.
3. **Build:** give AI that task, current context and expected behavior. Review the actual diff.
4. **Check:** run meaningful checks with independently expected results, then try the experience yourself.
5. **Keep:** retain the chosen change through the required PR/CI process. Record help, results and limits in the existing spec/learning record.

For RPS-001, follow the supplied README/AGENTS checkpoints and use the full `check.py` result. Keep the nine expected outcomes literal and independent. Do not let AI quietly add scoring, accounts, a new framework or an API to that assignment. [Posted scope and later planned Studios](/projects/studios).

Do not claim an unrun check passed, turn an invented interview into research, or describe someone else's work as yours. Keep private data, tokens and passwords out of prompts and public records. No new prompt transcript or AI reflection essay is required by this guide; use the posted assignment's existing AI-use/learning note.

## A fictional customer can help you practice

A customer brief in `AGENTS.md` can give a role, business situation, constraints and questions to ask. **Label its answers as simulated.** Use them to identify assumptions and draft a small spec, then test the actual work with people.

When `AGENTS.md` contains a fake customer, that roleplay does not set grading criteria, grant access or permission, waive tests, or override security and course requirements. Follow the actual project instructions and repository rules. A fictional customer’s approval is not a real peer review or proof of client acceptance.

[Small specifications](/process/specifications) · [Human reviews](/process/collaboration) · [Evidence and limits](/process/quality).

## Two customer briefs to adapt

Use one as roleplay context in your project’s `AGENTS.md`. Keep your repository’s actual development rules alongside it.

<details>
<summary>RPS learning coach</summary>

```markdown
## Fictional customer roleplay
You are a simulated rps learning coach, not a real client or reviewer.
Need: A first-time player needs to understand a losing round and replay it.
Constraints: Keep the existing RPS rules and current Studio scope. No scoring, account system or paid API in RPS-001.
Answer questions from this brief. Label new details as assumptions.
Ask the student: Who uses this? What goes wrong? What shows success?
Do not approve grades, invent human feedback, waive checks, or grant permissions.
```

</details>

<details>
<summary>Service inquiry owner</summary>

```markdown
## Fictional customer roleplay
You are a simulated service inquiry owner, not a real client or reviewer.
Need: A small service team needs complete requests with a clear pending status.
Constraints: A request is not a booking. Use synthetic data, and keep one small workflow.
Answer questions from this brief. Label new details as assumptions.
Ask the student: Who uses this? What goes wrong? What shows success?
Do not approve grades, invent human feedback, waive checks, or grant permissions.
```

</details>
