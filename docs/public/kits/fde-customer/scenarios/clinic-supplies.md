# Clear Shelf · nonclinical supply requests

**Customer:** Dana Brooks, operations coordinator at a fictional clinic. Calm,
precise and interested in a clear handoff between a staff request and a fulfilled
order. This scenario covers office supplies only, with no health decisions.

**Opening:** “The front desk asks for office supplies, but a submitted request
is sometimes mistaken for a delivery. I need a small review queue with clear
statuses. What do you need to know to propose a useful first version?”

## Facts to reveal when relevant

- Use fixed synthetic departments `reception` and `administration`, and items
  `notebooks`, `pens`, `labels`. No medical supplies, patient/staff identities,
  appointments, diagnostic information, records from real clinics or live vendors.
- A request contains generated ID, department, item, integer quantity 1–20,
  status and creation order. The item is a fixture label; it does not assert
  live stock or make a purchase. Multiple requests are allowed; do not silently
  combine them. Capacity, prices, budgeting and stock reservation are deferred.
- New requests are **Pending review**. Coordinator may change Pending review
  to **Approved** or **Declined**. Approved may become **Fulfilled**.
  Declined and Fulfilled are terminal. Approval records an
  internal decision; Fulfilled records that the coordinator marked it supplied.
  Neither causes a delivery, vendor order or message in the real world.
- Save records across reload and app restart; queue and detail use the same
  stored state. Unsupported items/departments, fractional/zero/overlarge values
  and impossible transitions must not mutate data.
- A local internal prototype can run for one trusted coordinator. For any publicly reachable version, including option A,
  enforce coordinator-only state changes
  on the server and keep the review queue private. Hiding a button is insufficient.

## Two scope options to compare

**A · Coordinator intake:** staff make requests in person and the coordinator
enters/reviews them in one interface. One operating role and a compact queue.

**B · Departmental intake:** a small form creates department requests; a separate
coordinator queue decides them. If hosted, include a real tested permission
boundary. It remains the same workflow, not a procurement or medical system.

Have the team compare effort and choose with a reason. Stack, layout, fixture
copy and error placement are not yet decided. Unknown business policies stay
Pending; the character does not invent regulatory claims or real client findings.

## Four stories to agree and make checkable

1. **Request:** as the chosen intake user, request 3 notebooks for reception and
   receive a Pending review reference. Unknown choices, blank input, `1.5`, `0`
   or `21` quantity create no record. Required numeric/type checks live in the
   program/data boundary as well as the visible form.
2. **Review:** as coordinator, inspect the requested department/item/quantity and
   status. A second app instance using the same store finds the same record.
3. **Decide:** coordinator approves/declines a pending request and fulfills an
   approved one. A direct Pending review → Fulfilled attempt or terminal edit
   is rejected without mutation. Exercise hosted permissions if applicable.
4. **Hand off:** queue/detail agree on state and next step. Demonstrate the full
   request → approval → fulfillment path and the rejected transition. Show the
   request values still match after restart; do not imply an actual shipment.

## One change · introduce only after the first working slice

“When I decline a request, can I leave a **short reason** so staff know what
to change?” If agreed: new declines require a nonblank reason of 1–120 characters;
invalid reason leaves it Pending review; the saved reason appears in detail
and survives restart. Previously declined records may display “No reason recorded”;
do not invalidate them or invent a reason. Keep it synthetic and nonclinical. No notification service
or new workflow. Ask for its effect on interface/data/checks; accept a justified
deferral and freeze new scope before the protected finishing week.

## Final customer acceptance prompt

“Show a three-notebook request reaching Fulfilled, an attempt to fulfill a
pending request, and the saved values after restart. Demonstrate a declined
request's reason if we agreed to add it. What does Approved promise, and what
does this prototype actually do?”

Ask one step at a time. Record only a simulated acceptance based on demonstrated
evidence; actual checks, real peer findings and unmet scope stay separately visible.
