# Make a small plan you can check

**A specification, or spec, says what the app should do and how you will know it works.** Start from your existing SPEC.md. Update the same project record rather than writing another report.

## Plan one useful task

1. **Name the user and need.** What are they trying to do? Which facts support it, and what are you assuming?
2. **Compare two feasible approaches.** Change one useful workflow or presentation decision. Share code and data where sensible.
3. **Choose a small scope.** List what is included and deferred. Use the posted Studio brief as a boundary.
4. **Write three to five stories and checks.** “As a [user], I want [action], so [benefit].” Give each an observable expected result and a relevant failure case.
5. **Get a second reading.** Can a classmate explain what passes? Resolve unclear wording before asking AI to build.

**Teaching example — RPS round**

> As a new player, I want the result to explain the winning rule so I can understand why I lost.
>
> **Check:** with player rock and computer paper, show both moves, a loss, and the paper-beats-rock explanation. Replay starts an independent round.

Compare an explanation beside the choices with a result card. Share the rules and tests. This design example does not add scoring, accounts or storage to the posted RPS-001 scope.

## Turn the plan into work

For a group, name an owner and a different reviewer for each meaningful slice. Everyone contributes design, development and QA. Agree how the parts connect; integrate early.

Link the story in an issue, make a bounded branch/change, run its checks, then use a PR and the required review/CI steps before merging. Record actual results and limits in the same spec. A useful spec changes when you learn; it is not a large document written once and ignored.

[Copy the existing record](/templates/project-record) · [Review together](/process/collaboration) · [Check the work](/process/quality) · [Posted versus planned scope](/projects/studios).
