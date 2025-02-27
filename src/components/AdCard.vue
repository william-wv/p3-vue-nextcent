<script setup>
  const props = defineProps({
    img: String,
    title: String,
    subtitle: String,
  })
</script>

<template>

  <div class="container d-flex">
    <div class="col-5 div__img">
      <img :src='img' alt="">
    </div>
    <div class="col-7 div__texts">
      <h1>{{title}}</h1>
      <p>{{ subtitle }}</p>
      <button class="btn btn-green">Learn More</button>
    </div>
  </div>

</template>

<style scoped>
  .container{
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .div__img{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div__texts{
    padding: 0 200px 0 0;
  }
  h1{
    font-size: 2.3rem;
  }

  h2{
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .div__texts{
      padding-top: 50px;
      padding-right: 0px;
    }
  }



</style>