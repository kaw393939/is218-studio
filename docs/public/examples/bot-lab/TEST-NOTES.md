# Bot Lab check receipt

Executed November 3, 2026, from the `is218-studio` repository root:

```sh
node --test docs/public/examples/bot-lab/test.mjs
```

Result: **28 tests passed, 0 failed, 0 skipped**. Node's built-in runner executed the actual modules used by the browser application. This receipt covers logic, not a real human peer review or a Python/server/authentication implementation.

Checked:

- All nine literal rule expectations and invalid player/opponent moves.
- Scoreless independent match setup, one-win state, ties, either side winning first-to-two.
- Extra actions after completion cannot score, add history, or call the opponent.
- Reset returns to a clean match and the first strategy decision.
- Transitions preserve the earlier state; injected strategies receive read-only completed history.
- Invalid strategies/decisions and unknown strategy choices are rejected.
- Clockwork's fixed cycle, Habit Reader's cold start/frequency/tie rule, selecting a different strategy, and an intentionally wrong habit prediction.

Browser interaction, keyboard/focus, responsive layout, and navigation require separate checks of the rendered page. The manual task list is in `README.md`. No human review, CI URL, or screenshot is claimed by this logic receipt.

## Agent-operated browser receipt · November 3, 2026

Checked in Chrome against the course preview, separately from the logic tests:

- Native navigation from the course reference opened the playable HTML page.
- Clockwork: rock, scissors, rock produced tie/win/win and a 2–0 match. All move buttons disabled at completion and focus moved to Reset.
- Enter activated Reset and returned focus to Rock; scores and history cleared.
- Keyboard Space/Enter played rock then scissors against Habit Reader. The second result explained its wrong rock prediction and the player's win.
- Changing opponent during that match reset scores/history and actually selected Clockwork.
- At 390px width, the controls and result remained readable with no page-level horizontal overflow. The architecture guide also fit at that width. The viewport was restored afterward.

These are assistant-operated checks, not real human peer feedback or a screen-reader audit. No account, backend or external model behavior is claimed.

## Actual build process and one adjustment

An agent implemented the reference from a bounded brief specifying separate rules/state, replaceable strategies, independent expectations and a working browser journey. The 28 automated checks and the browser tasks above were executed. Source review caught a proposed Mermaid diagram in a VitePress site without Mermaid support; it was replaced with a native course component before publication. Next time, include the site's supported diagram/rendering tools in the initial brief. No failing test or human reaction is invented to make this account more dramatic.
