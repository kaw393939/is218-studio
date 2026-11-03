# A complete game you can build on

**Bot Lab goes all the way:** create an account → play → see saved scores → update your account → sign out. Make the theme your own; keep the checked foundation.

[Download the runnable app](/examples/full-game/bot-lab-source.zip) · [Try the small game-only preview](/examples/bot-lab/a.html)

The preview shows the core. **The download runs the real Flask + SQLite account application locally.** GitHub Pages does not run its backend.

## Get it running

With Python 3.12+ installed, extract the ZIP, open its `bot-lab` folder in a terminal, then:

```sh
sh setup.sh
sh run.sh
```

Open **http://127.0.0.1:4190**. Make a throwaway account. Choose Clockwork, play paper and expect a win. Return to your dashboard; expect **one saved round**. The README includes Windows commands.

**What works:** registration/login/logout; two opponents; correct RPS/replay; private persisted scores/history; empty dashboard; name/password changes; revoked stale sessions. **30 automated checks passed** with CSRF enabled, including second-user access and duplicate requests.

## A short submission example

> I compared a prediction playground with a story duel and chose the playground. My promise is a complete account/game/history journey. I kept two small Strategy functions rather than a class hierarchy. The 30 checks passed. Next I need a real peer to try the journey, record an issue and verify my change.

[Required journey](/projects/game-app) · [Your record](/templates/project-record)

<details>
<summary>How the design, code and checks fit together</summary>

| Responsibility | Source in the ZIP |
| --- | --- |
| Interface | `app/templates/` and `app/static/style.css`: labeled forms, keyboard focus and narrow layouts. |
| Identity + access | `app/auth.py`: Flask-Login, Werkzeug password helpers and revocable SQLite login records. |
| Rules + pattern | `app/rules.py`: pure nine-outcome rule and two function-based Strategy opponents. Compare with a conditional before adding structure. |
| Request + ownership | `app/game.py`: authenticated owner, validated move, server-determined result and transaction that saves once. |
| Persistence | `app/db.py`: users, login sessions and owned rounds. One round = one result. |
| Verification | `tests/test_app.py`: real requests, CSRF, persistence, two-user isolation, password/logout and concurrent retries. |

Clockwork cycles through the moves. Habit Reader counters the most frequent earlier player move. It is a counting rule, **not trained AI**, and never receives the current choice. No AI API or paid service.

`PROJECT-RECORD.md` includes two directions, audience, architecture/pattern choice and an honest agent-learning note. The first command failed to import the app; an explicit test path and correct directory fixed collection before the 30-test pass. Tests do not establish human usability.

</details>

<details>
<summary>Run the checks and understand the evidence</summary>

From the extracted `bot-lab` directory after setup:

```sh
.venv/bin/python -B -m pytest -q -p no:cacheprovider
```

**Actual receipt, November 3, 2026:** Python 3.14.7; **30 passed**. Intended classroom environment is Python 3.12+. `TEST-NOTES.md` names checks and limits. A separate actual browser walkthrough verified signup, the empty dashboard, paper beating Clockwork’s rock, one saved win and a persisted display-name update. Password/session checks here are automated evidence; no real peer is claimed. Tests create temporary data, reject old cookies after logout/password change and deny second-user requests for another player's rounds.

This demonstrates the required local application scope. It is **not a 100-point student submission**: real peer participation, student decisions/contributions and source/CI evidence still need to be supplied. Use the [example rubric](/course/milestones#how-the-worked-examples-are-assessed); copying the package does not establish those criteria. Posted RPS-001 and course weights are unchanged.

Ask a peer to register, play, find a saved score and change their name. Record actual difficulty, make a useful change and retest. Keep the same record.

</details>

<details>
<summary>Setup details and official references</summary>

The README includes setup and Windows commands. Runtime data/key stay in ignored `instance/`; never commit them. Password changes sign out **all** of that user's sessions, including the current one. Sign in with the new password. Restarting preserves accounts/scores.

Local teaching app. Public hosting needs a server, HTTPS and deployment review; no server purchase is required here. No payments, email/recovery, multiplayer or admin roles.

Uses the official [Flask tutorial](https://flask.palletsprojects.com/en/stable/tutorial/), [Flask-Login](https://flask-login.readthedocs.io/en/latest/) for login management, [Werkzeug](https://werkzeug.palletsprojects.com/en/stable/utils/#module-werkzeug.security) password hashes and [Flask-WTF](https://flask-wtf.readthedocs.io/en/1.2.x/csrf/) form protection. This application enforces ownership.

</details>
