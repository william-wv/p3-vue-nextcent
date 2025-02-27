<script setup>
import CardHelp from './CardHelp.vue';


</script>

<template>
  <main>
    <div class="container d-flex">
      <div class="col-6">
        <div class="div__h1">
          <h1>Helping a local <span class="green">business reinvent itself</span></h1>
        </div>
        <div class="div__h2">
          <h2>We reached here with our hard work and dedication</h2>
        </div>
      </div>
      <div class="col-6">
        <div class="d-flex">
          <CardHelp imagem="/business-member.png" desc='imagem member' numers="2,245,341" txt="Members" />
          <CardHelp imagem="/business-club.png" desc='imagem club' numers="46,328" txt="Clubs" />
        </div>

        <div class="d-flex">
          <CardHelp imagem="/business-click.svg" desc='imagem click' numers="828,867" txt="Event Bookings" />
          <CardHelp imagem="/business-member.png" desc='imagem member' numers="1,926,436" txt="Payments" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .div__h1{
    width: 65%;
  }

  h1{
    font-size: 2.5rem;
    font-weight: 500;
  }
  h2{
    font-size: 1rem;
    font-weight: 500;
  }
</style>