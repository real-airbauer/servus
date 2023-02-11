<template>
  <section class="card4-card">
    <div class="card4-icon">
      <img :alt="Icon_alt" :src="Icon_src" class="card4-icon1" />
    </div>
    <main class="card4-content">
      <h1 class="card4-header">{{ Header }}</h1>
      <p class="card4-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Card4',
  props: {
    Description: {
      type: String,
      default:
        'I love talking to people and especially having discussions. Yes, it annoys many, but it is a kind of fulfillment and I find it great!',
    },
    Icon_src: {
      type: String,
      default: '/playground_assets/group%201314-200h.png',
    },
    Header: {
      type: String,
      default: 'Debate',
    },
    Icon_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.card4-card {
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
.card4-icon {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;
  background-color: #80FF44;
}
.card4-icon1 {
  height: 30px;
  object-fit: cover;
}
.card4-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.card4-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.card4-description {
  color: #C2C6CC;
  font-family: Poppins;
  line-height: 28px;
}
</style>
