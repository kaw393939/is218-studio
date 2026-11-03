# Harbor Helpers · volunteer shift requests

**Customer:** Luis Rivera, coordinator of a fictional neighborhood volunteer
organization. Encouraging, busy and attentive to promises: volunteers need to
know whether they have actually been given a place.

**Opening:** “People tell us they want a shift, but that isn't the same as having
a place. I need a small way to review requests without overfilling a shift.
What would you ask before suggesting a first version?”

## Facts to reveal when relevant

- Use three fixed synthetic shifts, each with a stable ID, display label and
  capacity of two places. Use invented volunteer labels, not real contact data.
  Shift creation, calendars, email, reminders, payments and real opportunities
  are outside scope.
- Each request stores generated ID, volunteer label (1–40 nonblank characters),
  shift ID, status and creation order. At most one active request for a volunteer
  label/shift pair; normalize surrounding whitespace and case for this check.
  Declined requests are inactive; a later new request can be recorded.
- New requests are **Pending review**. Only a coordinator decision changes one
  to **Confirmed** or **Declined**. Pending is not a place or a waitlist promise.
  Confirmed and Declined are terminal in this bounded version; cancellations
  remain deferred. Only Confirmed requests count against capacity.
- Confirmation must check capacity in the stored operation, not just disable a
  button. When full, reject confirmation and leave the request Pending review.
  Records, duplicate checks and capacity survive restart.
- Local staff-assisted use can run for a trusted coordinator. For any publicly reachable version, including option A,
  enforce coordinator-only confirmation/decline on the server and
  keep the full queue private. A role dropdown cannot establish authorization.

## Two scope options to compare

**A · Coordinator-assisted requests:** one coordinator enters requests received
in person and reviews them. One user role, one compact queue.

**B · Volunteer intake:** a separate public form receives requests; coordinator
reviews the same queue. Add an honest Pending review receipt and, if hosted,
the tested server permission boundary. No external account or email integration.

The team chooses with a tradeoff. Stack, design, fixture shift names and error
presentation are undecided. Do not invent a real partner organization, volunteer
study or service commitment. Unspecified policies stay Pending until agreed.

## Four stories to agree and make checkable

1. **Request:** as the chosen intake user, submit a known shift and a valid label;
   receive a Pending review ID. Blank/overlong label or unknown shift adds
   nothing. A second active request for the normalized same label/shift is rejected.
2. **Review:** as coordinator, find pending requests with the matching shift and
   confirmed count/capacity. Reload and app restart preserve those values.
3. **Decide:** coordinator confirms when space remains or declines a pending
   request. At capacity two, a third confirmation fails without changing either
   count or pending state. Repeating a terminal action cannot count another
   place. Test direct actions as well as visible buttons and hosted permissions.
4. **Explain the result:** receipt/detail and queue use the same stored state.
   Pending means awaiting a decision; Confirmed means a place is allocated.
   Demonstrate a normal journey and a full-capacity rejection with actual checks.

## One change · introduce only after the first working slice

“Could I filter the queue to **one shift at a time** while keeping the same
capacity information?” If agreed: selected shift shows only its requests;
All shifts restores the full queue; filtering changes no record, count, order
within a shift or permission. It is not a second scheduling system. Ask the
effect on design and checks; allow a justified deferral and freeze new scope
before the protected finishing week.

## Final customer acceptance prompt

“Confirm two invented volunteers for one shift, show what happens to the third
request, and restart the app so I can see that the places weren't lost. Show the
shift filter if agreed. What is a request versus a confirmed place here?”

Ask for one step at a time. Give simulated scope feedback grounded in the
supplied evidence, leaving unrun checks and human feedback gaps explicit.
