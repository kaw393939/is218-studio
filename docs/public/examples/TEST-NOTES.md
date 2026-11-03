# Preview checks — November 2, 2026

These are agent-operated checks of the synthetic previews, not human usability research or student course-completion evidence.

## Logic checks

Command: `node docs/public/examples/check-examples.mjs`.

Passed:

- All nine RPS player/computer pairs, using an independent expected-outcome table.
- Invalid RPS choices rejected; random-choice boundaries map to all three moves; an out-of-range random value is rejected.
- All nine DeskReady service/time-window pairs produce a pending request.
- Request reference, human-readable fields, trimmed note, optional note, note length, invalid service/window, and positive sequence checks.
- Markup-like note text remains plain data in the logic result.

## Chrome interaction checks

Used an isolated local preview tab. No Canvas interaction or student submission occurred.

- RPS A: empty submit showed an actionable message; all nine fixed-choice rounds displayed both choices and the correct result. Reset cleared the result and returned focus to Rock.
- RPS B: keyboard Space selected Paper; Enter activated Play; Paper versus Rock displayed a win and both choices.
- DeskReady A: missing service and missing window produced separate messages. A valid request displayed `DR-001`, its chosen values, and **Pending review**. A second request displayed `DR-002` first in history. Receipt and history used matching statuses; focus moved to the receipt heading.
- DeskReady B: began with empty history; keyboard Enter submitted a valid request. `<b>Synthetic note</b>` appeared literally, not as rendered bold markup. Reload reset the receipt and history as documented.
- Desktop screenshot inspected: readable labels, visible status, form/receipt hierarchy, no horizontal overflow. No browser console errors were recorded in this local preview tab.

## Limits and next checks

Responsive CSS collapses the two-column layouts below 720 pixels. A physical phone, narrow viewport, screen reader, full keyboard-only traversal, deployed base-path navigation, the required server application, and course CI were **not** tested in this check. There is no persistence or backend to verify in these static previews.

The A selections are author judgments after inspecting these layouts. They are not presented as real student or customer preferences. Ask an actual classmate to try the corresponding project task without coaching and record their observation before claiming peer review.
