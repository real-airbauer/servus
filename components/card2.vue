<template>
  <section class="card2-card">
    <div class="card2-icon">
      <img :alt="Icon_alt" :src="Icon_src" class="card2-icon1" />
    </div>
    <main class="card2-content">
      <h1 class="card2-header">{{ Header }}</h1>
      <p class="card2-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Card2',
  props: {
    Icon_alt: {
      type: String,
      default: 'image',
    },
    Description: {
      type: String,
      default:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
    },
    Icon_src: {
      type: String,
      default: '/playground_assets/group%201314-200h.png',
    },
    Header: {
      type: String,
      default: 'Sima Mosbacher',
    },
  },
}
</script>

<style scoped>
.card2-card {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.card2-icon {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;
  background-color: #80FF44;
}
.card2-icon1 {
  height: 30px;
  object-fit: cover;
}
.card2-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.card2-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.card2-description {
  color: #C2C6CC;
  font-family: Poppins;
  line-height: 28px;
}
</style>
