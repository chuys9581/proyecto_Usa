import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nfc-y-qr',
      name: 'nfc-y-qr',
      component: () => import('../views/NfcyQrView.vue')
    },
    {
      path: '/llaveros',
      name: 'llaveros',
      component: () => import('../views/LlaverosView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/LlaverosView.vue')
    },
  ]
})

export default router
