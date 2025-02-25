<script setup>
import CardCommunity from './CardCommunity.vue';


</script>

<template>

  <div class="container">
    <div class="text-center text-title">
      <h2>Manage your entire community in a single system</h2>
      <h3 >Who is Nextcent suitable for?</h3>
    </div>
    <div class="container-cards ">
      <CardCommunity 
        id=1 
        image="/public/community/community-3.svg" 
        title="Membership Organisations"
        subtitle="Our membership management software provides full automation of membership renewals and payments"
      />
      <CardCommunity 
        id=1 
        image="/public/community/community-2.svg" 
        title="National Associations"
        subtitle="Our membership management software provides full automation of membership renewals and payments"
      />
      <CardCommunity 
        id=1 
        image="/public/community/community-1.svg" 
        title="Clubs And Groups"
        subtitle="Our membership management software provides full automation of membership renewals and payments"
      />
    </div>
  </div>

</template>

<style scoped>

  .text-center {
    color: var(--D_Gray);
    margin-bottom: 50px;
  }

  h2{
    font-size: 2rem;
    font-weight: 500;
  }

  h3{
    font-size: 1rem;
    font-weight: 300;
  }

  .container-cards{
    display: flex;
    align-items: center;
    padding: 0 150px;
    gap: 50px;
  }

  

  @media (min-width:768px) and (max-width:990px) {
  .container-cards{
    display: grid;
    grid-template-columns: 230px 230px 230px;
  }
}
</style>