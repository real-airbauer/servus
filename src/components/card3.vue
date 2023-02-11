<template>
  <section class="card3-card">
    <div class="card3-icon">
      <img :alt="Icon_alt" :src="Icon_src" class="card3-icon1" />
    </div>
    <main class="card3-content">
      <h1 class="card3-header">{{ Header }}</h1>
      <p class="card3-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Card3',
  props: {
    Icon_alt: {
      type: String,
      default: 'image',
    },
    Icon_src: {
      type: String,
      default: '/playground_assets/group%201317-200h.png',
    },
    Description: {
      type: String,
      default:
        'These are not all programming languages I work with, but the ones I use the most and like the most',
    },
    Header: {
      type: String,
      default: 'JS ; C# ; CSS ; HTML',
    },
  },
}
</script>

<style scoped>
.card3-card {
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
.card3-icon {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;
  background-color: #80FF44;
}
.card3-icon1 {
  height: 30px;
  object-fit: cover;
}
.card3-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.card3-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.card3-description {
  color: #C2C6CC;
  font-family: Poppins;
  line-height: 28px;
}
</style>
