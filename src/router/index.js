import { createRouter, createWebHistory } from 'vue-router';
import App from '../views/HomePage.vue';
import LoginRegister from '../views/LoginRegister.vue';

const routes = [
  { path: '/', component: App },  
  { path: '/login', component: LoginRegister } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;