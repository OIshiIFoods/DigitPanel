import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'digitPanal',
      component: () => import('@/views/DigitPanel.vue')
    }
  ]
})

export default router
