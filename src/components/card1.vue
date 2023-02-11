<template>
  <section class="card1-card">
    <div class="card1-icon">
      <img :alt="Icon_alt" :src="Icon_src" class="card1-icon1" />
    </div>
    <main class="card1-content">
      <h1 class="card1-header">{{ Header }}</h1>
      <p class="card1-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Card1',
  props: {
    Header: {
      type: String,
      default: 'Hitman WoA',
    },
    Icon_src: {
      type: String,
      default: '/playground_assets/group%201316-200w.png',
    },
    Description: {
      type: String,
      default:
        "I spend a lot of time in Hitman, so I'm not bad either, even if I can't get close to gods like MrFreeze!",
    },
    Icon_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.card1-card {
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
.card1-icon {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;
  background-color: #80FF44;
}
.card1-icon1 {
  height: 30px;
  object-fit: cover;
}
.card1-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.card1-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.card1-description {
  color: #C2C6CC;
  font-family: Poppins;
  line-height: 28px;
}
</style>
