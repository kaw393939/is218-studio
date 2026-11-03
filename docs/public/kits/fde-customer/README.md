# IS218 simulated-customer kit

Start with **AGENTS.md** in your own agent. This is a text-based role-play kit;
there is no installed model, API key, automated grader or completed application.

1. Keep this folder in your local team project as `customer-kit/`.
2. Ask your agent: “Read customer-kit/AGENTS.md. Start customer mode and help us choose a scenario. Ask one question at a time.”
3. Choose one scenario. Keep one shared `customer-kit/CUSTOMER-NOTES.md`; agree your decisions
   as a team and link it from the spec. Do not create a separate customer per member.
4. Say “Exit customer mode” to develop, then “Resume customer mode; read our notes”
   for discovery, the change request or final acceptance.

These files are reference material. You can read the full scenario; discovery is
practice asking useful questions and clarifying choices, not guessing hidden facts.
All customer names, needs, data and quotes are fictional. Label simulation in
your portfolio. Keep all records synthetic; use no private or patient information.

Choose one file under `scenarios/`. Use that file's requirements, then agree
three to five stories. Any language/framework is welcome. Build one real stored
workflow; a static preview does not establish persistence or permissions.

Real teammates must share meaningful design, development and QA work. A real
classmate still reviews the product; the character cannot replace human feedback.

`FACILITATOR-CHECK.md` provides inspectable role-play paths and limitations.
Rebuild the downloadable archive from the course repository with:

```sh
python3 docs/public/kits/fde-customer/build_zip.py
```

It packages the kit files in a `customer-kit/` folder with stable ZIP timestamps.
