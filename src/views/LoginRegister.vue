<script setup>
import { ref } from 'vue';

const isRegister = ref(false);
const name = ref('');
const email = ref('');
const password = ref('');

const submitForm = () => {
  console.log(isRegister.value ? 'Registrando' : 'Logando', email.value, password.value);
};

const toggleForm = () => {
  isRegister.value = !isRegister.value;
};
</script>

<template>


  <div class="d-flex vh-100 justify-content-center align-items-center bg-success bg-opacity-10">
    <div class="card shadow-lg p-4" style="width: 400px;">
      <div class="card-body">
        <h2 class="text-center text-success mb-4">{{ isRegister ? 'Criar Conta' : 'Login' }}</h2>
        <form @submit.prevent="submitForm">
          <div v-if="isRegister" class="mb-3">
            <label class="form-label text-success">Nome</label>
            <input v-model="name" type="text" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label text-success">Email</label>
            <input v-model="email" type="email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label text-success">Senha</label>
            <input v-model="password" type="password" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-success w-100">
            {{ isRegister ? 'Registrar' : 'Entrar' }}
          </button>
        </form>
        <p class="text-center mt-3 text-success cursor-pointer" @click="toggleForm">
          {{ isRegister ? 'Já tem uma conta? Faça login' : 'Não tem conta? Registre-se' }}
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
