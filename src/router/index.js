import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Refund from '../views/Refund.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/refund',
    name: 'Refund',
    component: Refund
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
