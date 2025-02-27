<script setup>
const props = defineProps ({
  imagem: String,
  numers: String,
  txt: String,
  desc: String
})
</script>

<template>
  <div class="d-flex container">
    <div class="img">
      <img :src="imagem" :alt="desc">
    </div>
    <div class="texts">
      <h1>{{ numers }}</h1>
      <h2>{{ txt }}</h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 20px;
}

img{
  width: 48px;
  height: 48px;
}

.img{
  margin-right: 20px; 
  display: flex;
  align-items: center;
  justify-content: center;
}

h1{
  font-size: 1.5rem;
}

h2{
  font-size: 1.0rem;
}
</style>
