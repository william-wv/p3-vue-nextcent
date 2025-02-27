<script setup>

</script>

<template>
  <header>
    <div class="container">
      <div class="element-1">
        <div class="header__img">
          <img src="../assets/images/Header-Page/Icon.svg" alt="logo" class="img-header">
          <h3>NextCent</h3>
        </div>
      </div>
      
      <!-- Menu Hamburguer para mobile -->
      <div class="menu-toggle" @click="toggleMenu">
        ☰
      </div>

      <nav :class="{'open': menuOpen}">
        <ul class="ul-header">
          <li class="li-header"><router-link to="/">Home</router-link></li>
          <li class="li-header">Service</li>
          <li class="li-header">Feature</li>
          <li class="li-header">Product</li>
          <li class="li-header">Testimonial</li>
          <li class="li-header">FAQ</li>
        </ul>
      </nav>

      <div class="element-3">
        <div class="buttons-header">
          <router-link to="/login" class="btn btn-white">Login</router-link>
          <button class="btn btn-green">Sign up</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Padrão */
header {
  background-color: var(--Silver);
  width: 100%;
  padding: 10px 20px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.header__img {
  display: flex;
  align-items: center;
}

.img-header {
  width: 40px;
}

h3 {
  margin-left: 10px;
  position: relative;
  top: 5px;
}

.ul-header {
  display: flex;
  list-style: none;
  gap: 20px;
  position: relative;
  top: 10px;
}

.li-header a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.buttons-header {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.btn-white {
  background: white;
  border: 1px solid black;
}

.btn-green {
  background: green;
  color: white;
}

/* Responsivo */
@media (max-width: 768px) {
  .ul-header {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .ul-header.open {
    display: flex;
  }

  .menu-toggle {
    display: block;
    cursor: pointer;
    font-size: 24px;
  }

  .buttons-header {
    flex-direction: column;
  }
}

@media (min-width: 769px) {
  .menu-toggle {
    display: none;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>
