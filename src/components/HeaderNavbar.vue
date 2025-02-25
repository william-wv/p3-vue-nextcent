<script setup>

</script>

<template>
  <header>
    <div class="container d-flex">
      <div class="element-1">
        <div class="header__img d-flex">
          <img src="../assets/images/Header-Page/Icon.svg" alt="logo" class="img-header">
          <h3>NextCent</h3>
        </div>
      </div>
      <div class="element-2 ">
        <ul class="ul-header d-flex">
          <li class="li-header ">
            <router-link to="/">Home</router-link>
          </li>
          <li class="li-header">Service</li>
          <li class="li-header">Feature</li>
          <li class="li-header">Product</li>
          <li class="li-header">Testimonial</li>
          <li class="li-header">FAQ</li>
        </ul>
      </div>
      <div class="element-3 d-flex">
        <div class="butons-header">
          <router-link to="/login" class="btn btn-white">
            <button >Acessar Login</button>
          </router-link>
          <button class="btn btn-green">Sign up</button>
        </div>
      </div>
    </div>
  </header>


</template>

<style scoped>
/* padrao: 1440 */
header {
  background-color: var(--Silver);
}



h3 {
  margin-left: 5px;
  position: relative;
  top: 4px;
}




.container {
  padding: 0;
  align-items: center;
  justify-content: space-between;
}

.ul-header {
  padding: 0;
  gap: 30px;
  position: relative;
  top: 8px;

}

@media (min-width:1550px) {
  .container {
    align-items: center;
    justify-content: space-between;
  }
}


</style>
