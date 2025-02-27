<script setup>
import CommunityArea from '@/components/CommunityArea.vue';
import OurClients from '@/components/OurClients.vue';
import AdCard from '@/components/AdCard.vue';

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
  <CommunityArea/>
  <AdCard 
    img="/rafiki.svg"
    title="The unseen of spending three years at Pixelgrade"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
  />  
  
  
</template>

<style scoped>
/* padrao: 1440 */
section {
  background-color: var(--Silver);
}

h1 {
  font-size: 5rem;
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
@media (max-width: 768px) {
  .container{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;

  }

  .element-1 {
    padding: 50px 0;
  }

  h1{
    font-size: 2.5rem !important;
  }

  img{
    height: 200px;
  }
  }



@media (min-width:1633px){
  h1{
    font-size: 5rem !important;
  }
}
</style>