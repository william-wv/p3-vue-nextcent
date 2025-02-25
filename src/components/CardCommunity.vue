<script setup>
const props = defineProps({
  id: Number,
  image: String,
  title: String,
  subtitle: String,
})
</script>

<template>

  <div class="container text-center">
    <img :src='image'>
    <div class="txt-h1">
      <h1>{{ title }}</h1>
    </div>
    <div class="txt-p">
      <p>{{ subtitle }}</p>
    </div>
  </div>

</template>

<style scoped>
h1 {
  font-size: 2.2rem;
}

</style>