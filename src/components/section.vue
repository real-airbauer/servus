<template>
  <section class="section-section">
    <header class="section-header">
      <span class="section-head">{{ Section }}</span>
      <h2 class="section-linksheaderig section-heading">{{ linksheaderig }}</h2>
    </header>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    linksheaderig: {
      type: String,
      default: 'My Links and Socials <3',
    },
    Section: {
      type: String,
      default: 'All my links',
    },
  },
}
</script>

<style scoped>
.section-section {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 120px;
  border-color: #51515A;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
  border-top-width: 1px;
}
.section-header {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.section-linksheaderig {
  text-align: center;
}
</style>
