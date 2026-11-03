# Bot Lab: the complete local game

Create an account → play RPS → return to private scores → update your account → sign out. Flask, Flask-Login, Flask-WTF, Werkzeug and SQLite. No AI service, paid account or separate database server.

## Start here

Python 3.12+ is the intended classroom environment. This receipt was executed with Python 3.14.7; use the actual CI result for its configured environment.

```sh
sh setup.sh
sh run.sh
```

Open **http://127.0.0.1:4190**. Create a made-up username such as `orbit_leah`, display name `Leah`, and a new throwaway passphrase of at least 12 characters. There are no built-in accounts or real student records. `ARENA_PORT=4191 sh run.sh` changes the port.

Windows PowerShell:

```powershell
py -m venv .venv
.venv\Scripts\python -m pip install -r requirements.txt
.venv\Scripts\python -B -m flask --app app run --host 127.0.0.1 --port 4190
```

Run checks from this directory:

```sh
.venv/bin/python -B -m pytest -q -p no:cacheprovider
```

Windows: `.venv\Scripts\python -B -m pytest -q -p no:cacheprovider`.

## Try the required journey

1. Register. The dashboard starts at zero with a next action.
2. Choose Clockwork. It opens with rock. Play paper; expect one win.
3. Refresh the result and revisit the dashboard; expect **one** saved round.
4. Play again or choose Habit Reader. Each completed round is one saved result.
5. Edit your display name. Change your password using the current password. All sessions sign out; the old password fails and the new password works.
6. Sign out and sign in again. Results persist. A direct private request after logout is denied.
7. Create a different account in another browser/profile. It has its own empty dashboard and cannot open the first account's `/rounds/ID` or `/api/rounds/ID`.

The 30 automated checks test these boundaries, including two parallel submissions of the same round. Browser inspection is separate evidence; see TEST-NOTES.md.

## Where to look

- `app/rules.py`: nine outcomes; two interchangeable Strategy functions.
- `app/game.py`: ownership, authoritative result, transaction that saves a round once.
- `app/auth.py`: registration, framework login, revocable session records, account updates.
- `app/db.py`: SQLite schema and request-scoped connections.
- `app/templates/` + `app/static/style.css`: server-rendered interface; no JavaScript needed.
- `tests/test_app.py`: rules + real Flask request/SQLite checks with CSRF enabled.
- `PROJECT-RECORD.md`: compact planning/design/evidence example.

One **round** is the score unit; no match winner. Clockwork follows rock → paper → scissors based on your completed-round count. Habit Reader counters your most frequent earlier move; frequency ties use rock/paper/scissors order. It is a heuristic, **not trained AI**.

## Data and sessions

The app creates `instance/arena.sqlite` and a random, permission-restricted local signing key in `instance/secret-key`. Both are ignored by Git and excluded from the ZIP. The key remains stable across restarts. `ARENA_INSTANCE=/absolute/path/to/local-state` places runtime data elsewhere. `ARENA_SECRET_KEY` can supply a server secret from the environment. Never commit a real key or database.

Passwords use Werkzeug's hashing helper. Flask signs the cookie; Flask-Login loads the user. A live SQLite login record and matching user version are also required. Logout deletes that record. Password changes revoke all records and increment the version; old cookies fail. Sessions expire after eight hours. All forms use Flask-WTF CSRF protection. Private responses use `Cache-Control: no-store`.

To reset this throwaway installation, stop its server, delete only this app's `instance` directory and restart. This removes its accounts, results and signing state.

## Scope

Local teaching reference, not a production identity service. No email/recovery, payment, multiplayer, admin panel or public leaderboard. Public deployment needs a suitable server, HTTPS (`ARENA_HTTPS=1` for secure cookies), secret management, login rate limits and deployment review. Flask's development server is local only. GitHub Pages publishes the guide and ZIP, not this backend.

Students may reuse this supported foundation and explain their changes. Running it unchanged does not establish individual creativity, understanding, real peer review or development history. Keep posted RPS-001 unchanged.

## Official references

- https://flask.palletsprojects.com/en/stable/tutorial/
- https://flask-login.readthedocs.io/en/latest/
- https://werkzeug.palletsprojects.com/en/stable/utils/#module-werkzeug.security
- https://flask-wtf.readthedocs.io/en/1.2.x/csrf/
