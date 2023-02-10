<template>
  <div class="download-container"></div>
</template>

<script>
export default {
  name: 'Download',
  head: {
    title: 'download - airbauer',
    meta: [
      {
        property: 'og:title',
        content: 'download - airbauer',
      },
    ],
  },
}
</script>

<style scoped>
.download-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
