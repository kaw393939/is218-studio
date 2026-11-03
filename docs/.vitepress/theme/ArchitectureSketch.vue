<script setup>
defineProps({ botLab: { type: Boolean, default: false } })
</script>
<template>
  <figure class="architecture-sketch" aria-label="Example responsibilities and checks in a small creative application">
    <div v-if="botLab" class="architecture-grid">
      <section><span>app.mjs</span><h3>Interface</h3><p>Collect the move, select a bot and render the returned match.</p><small>Browser journey checks</small></section>
      <section><span>core.mjs</span><h3>Match rules and state</h3><p>Call the supplied opponent, apply rules and return the next state.</p><small>Independent state tests</small></section>
      <section><span>strategies.mjs</span><h3>Replaceable opponent</h3><p>Completed history in; a move and explanation out.</p><small>Fixed-history expectations</small></section>
    </div>
    <div v-else class="architecture-grid">
      <section><span>Input and presentation</span><h3>Try the experience</h3><p>Buttons, keyboard, a game scene or another interface.</p><small>User-journey checks</small></section>
      <section><span>Rules and state</span><h3>Decide what happens</h3><p>Validate actions, apply rules and return the next state.</p><small>Independent core tests</small></section>
      <section class="optional"><span>Optional integrations</span><h3>Connect what you need</h3><p>Storage, a service or an AI model, when the promise needs it.</p><small>Boundary and failure checks</small></section>
    </div>
    <figcaption v-if="botLab">The interface injects a selected opponent function into the match core. The core supplies completed history and returns a new match result; it does not read the page.</figcaption>
    <figcaption v-else>Trace one action through your actual parts. A browser-only app may need only the first two; a different stack may draw different boundaries.</figcaption>
  </figure>
</template>
<style scoped>
.architecture-sketch{margin:24px 0}.architecture-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.architecture-grid section{padding:18px;border:2px solid var(--vp-c-brand-1);border-radius:10px;background:var(--vp-c-bg-soft)}.architecture-grid .optional{border-style:dashed}.architecture-grid span{font-size:.78rem;font-weight:700;color:var(--vp-c-brand-1)}.architecture-grid h3{font-size:1.05rem;line-height:1.3;margin:10px 0}.architecture-grid p{font-size:.9rem;line-height:1.55;margin:8px 0 16px}.architecture-grid small{display:block;font-weight:650;line-height:1.4}.architecture-sketch figcaption{font-size:.85rem;line-height:1.5;margin-top:12px;color:var(--vp-c-text-2)}@media(max-width:760px){.architecture-grid{grid-template-columns:1fr}}
</style>
