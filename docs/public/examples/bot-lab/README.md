# RPS Bot Lab: source and check receipt

This is a browser-only creative teaching reference, not a completed Python RPS-001 submission or a claimed student submission. It uses no accounts, storage, server, model API, or paid service.

## Run

Serve this directory over HTTP, for example from the repository root:

```sh
python3 -m http.server 4187 --directory docs/public
```

Open `http://localhost:4187/examples/bot-lab/a.html`. The app works at that address; links back to the VitePress course need the published `/is218-studio/` base or the course preview server.

## Automated checks

From the repository root:

```sh
node --test docs/public/examples/bot-lab/test.mjs
```

Tests compare all nine outcomes to literal expected answers, exercise scores and ties, end/reset behavior, immutability, invalid choices, injected opponents and both actual strategies. These are logic checks, not a claim that a human reviewed the game or that a browser/accessibility audit passed. See `TEST-NOTES.md` for the actual receipt and the browser tasks still to check.

## Architecture

- `core.mjs`: exact rules, first-to-two match state and transitions. No DOM imports.
- `strategies.mjs`: replaceable opponent functions that receive completed history only. Habit Reader counts earlier moves; it is not an LLM.
- `app.mjs`: browser events and rendering. It passes a selected strategy into the core and uses text nodes for output.
- `a.html` and `style.css`: the interface. Font service failure falls back to system fonts; no remote service is needed for gameplay.
- `test.mjs`: independent rule expectations and match/strategy checks, using Node's built-in test runner.

The useful pattern is Strategy: the rules stay fixed while an opponent function changes. Functions are sufficient here. Classes, a dependency injection container, database, and event bus would add machinery without improving this small application.

## Finished promise

A player can choose either named opponent, play a first-to-two match with the standard rules, see the actual moves and bot reasoning, then reset. Ties do not add points. An ended match cannot accept another scored action. Changing bots resets all match history. No history persists across a reload.

## Experiment, not finished promise

The larger dream is an adaptive opponent lab. The implemented experiment uses a deliberately limited frequency guess. A repeating player makes it look smart; changing habits can defeat it. That demonstrates a limit; it is not measured evidence that users learn. This reference was created with agent coding assistance and checked separately as recorded in TEST-NOTES.md. Students should record their own actual agent attempts, rejected suggestions, failed checks and changes.

## Manual browser tasks

1. Play rock against Clockwork's opening rock: tie and 0–0.
2. Play scissors against its paper, then rock against its scissors: 2–0, match ends, controls disable.
3. Try keyboard navigation and reset; new match has no earlier history and focus returns to Rock.
4. Switch to Habit Reader; play rock, then scissors. Inspect the second-round frequency explanation and the wrong prediction.
5. Change the bot mid-match: scores/history clear and the selected opponent actually changes.
6. At a narrow viewport, verify all three choices, score, bot explanation, history and course links remain usable.

No real human peer issue, feedback result, CI run URL, or browser check receipt is fabricated here. The course record must link genuine evidence for the student's own implementation.
