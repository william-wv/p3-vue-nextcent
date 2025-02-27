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
@media (max-width: 768px) {
    
    h1{
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  .container {
    margin: 0 !important;
    padding: 0 30px;
    
  }
</style>