# Working teaching previews

These four pages support the [worked project records](/is218-studio/examples/). They are fictional, static teaching previews. They do **not** replace the required application, server, CI, deployment, or test evidence in a student's own repository.

## RPS Replay — individual

- [Version A](rps/a.html): choices and result beside each other on a wide screen; selected example because it keeps the action and outcome close.
- [Version B](rps/b.html): result-first overview, then controls and a short test contract. Same behavior and rule module.
- Try all nine combinations with the fixed computer choices. Normal play uses a random choice. Reset clears the round and focuses the first player choice.
- No accounts, score storage, backend, or network request.
- This JavaScript preview is not a drop-in Python solution. The posted Python `determine_winner` contract returns `win`, `lose`, or `tie`; the preview uses display words such as “loss” and “draw.” Follow the course starter’s actual API/tests.

## DeskReady — group

- [Version A](deskready/a.html): request form beside its receipt and history; selected example because a reviewer can compare inputs and status.
- [Version B](deskready/b.html): process overview first, form and receipt next, full-width history below. Same behavior and validation module.
- Choose a service and preferred time window; create a demo request; find its reference and **Pending review** status in the receipt and history. A second request gets the next reference and appears first in history.
- **Pending review is unconfirmed.** No actual room, service, booking, staff notification, email, authentication, or database exists here. Use synthetic notes. History is only page memory and resets on reload or when switching versions.

## Run locally

Serve this repository's `docs/public` directory with a local HTTP server and open `/examples/rps/a.html` or `/examples/deskready/a.html`. ES modules require HTTP; opening the HTML as a `file:` URL may fail. The course-home links intentionally use the deployed `/is218-studio/` base.

The examples use plain HTML, CSS, and JavaScript. No packages, key, cloud account, or API are needed. Logic modules are separate from DOM code so students can inspect and test small functions.

From the repository root:

```sh
node docs/public/examples/check-examples.mjs
```

See [test notes](TEST-NOTES.md) for what was actually checked. This small script is not the course's full CI or browser test suite. No human student, partner, or client testing is claimed.
