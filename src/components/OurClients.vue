<script setup>

const listaDeImagens = [
  { src: '/public/Icons-Clients/cli-1.svg', alt: 'Imagem 1' },
  { src: '/public/Icons-Clients/cli-2.svg', alt: 'Imagem 2' },
  { src: '/public/Icons-Clients/cli-3.svg', alt: 'Imagem 3' },
  { src: '/public/Icons-Clients/cli-4.svg', alt: 'Imagem 4' },
  { src: '/public/Icons-Clients/cli-5.svg', alt: 'Imagem 5' },
  { src: '/public/Icons-Clients/cli-6.svg', alt: 'Imagem 6' },
  { src: '/public/Icons-Clients/cli-7.svg', alt: 'Imagem 7' }
]
</script>

<template>
  <main>
    <div class="container text-center">
      <h2 class="h2-clients">Our Clients</h2>
      <h3 class="h3-clients">We have been working with some Fortune 500+ clients</h3>

      <div class="d-flex cards">
        <img v-for="(img, index) in listaDeImagens" :key="index" :src="img.src" :alt="img.alt" />
      </div>
    </div>



  </main>

</template>

<style scoped>
.container {
  padding: 0;
}

h2 {
  font-size: 2rem;
  font-weight: 500;
  color: var(--D_Gray);
}

h3 {
  font-size: 1rem;
  font-weight: 300;
  color: var(--D_Gray);
}

img {
  cursor: pointer;
}

.cards {
  margin: 50px 0;
  justify-content: space-between;
}

.card {
    width: 48px;
    height: 48px;
  }
</style>