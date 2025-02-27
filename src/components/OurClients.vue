<script setup>

const listaDeImagens = [
  {id:0, src: '/Icons-Clients/cli-1.svg', alt: 'Imagem 1' },
  {id:1, src: '/Icons-Clients/cli-2.svg', alt: 'Imagem 2' },
  {id:2, src: '/Icons-Clients/cli-3.svg', alt: 'Imagem 3' },
  {id:3, src: '/Icons-Clients/cli-4.svg', alt: 'Imagem 4' },
  {id:4, src: '/Icons-Clients/cli-5.svg', alt: 'Imagem 5' },
  {id:5, src: '/Icons-Clients/cli-6.svg', alt: 'Imagem 6' },
  {id:6, src: '/Icons-Clients/cli-7.svg', alt: 'Imagem 7' }
]
</script>

<template>
  <main>
    <div class="container text-center">
      <h2 class="h2-clients">Our Clients</h2>
      <h3 class="h3-clients">We have been working with some Fortune 500+ clients</h3>

      <div class="d-flex cards">
        <img v-for="(img) in listaDeImagens" :key="listaDeImagens.id" :src="img.src" :alt="img.alt" />
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
  display: flex;
  justify-content: space-between;
}

.card {
    width: 48px;
    height: 48px;
  }


@media (max-width: 768px) {
  main{
    padding: 40px;
  }
  .cards {
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 30px;
  justify-content: center;
  align-content: center;
  justify-content: space-evenly;
}

}



</style>