<script setup>
import OurClients from '@/components/OurClients.vue';


</script>

<template>
  <section>
    <div class="container d-flex">
      <div class="element-1 col-7">
        <div class="container-h1">
          <h1>Lessons and insights <span class="green">from 8 years</span> </h1>
        </div>
        <div class="container-h2">
          <h2>Where to grow your business as a photographer: site or social media?</h2>
        </div>
        <div class="container-btn ">
          <button type="button" class="btn btn-green">Start your journey</button>
        </div>
      </div>
      <div class="element-2 col-5">
        <img src="../assets/images/Header-Page/Illustration.svg" alt="">
      </div>
    </div>
  </section>
  <OurClients/>
  
  
</template>

<style scoped>
/* padrao: 1440 */
section {
  background-color: var(--Silver);
}

h1 {
  font-size: 4rem;
  color: var(--D_Gray);
}

h2 {
  font-size: 1rem;
  font-weight: 400;
  color: var(--Gray);
}

img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.element-1 {
  align-items: center;
  justify-content: center;
  padding: 100px 0;
}


.element-2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  margin: 0;
}

@media (min-width:1633px){
  h1{
    font-size: 5rem !important;
  }
}
</style>