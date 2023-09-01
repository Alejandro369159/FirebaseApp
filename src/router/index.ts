import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login/LoginPage.vue')
    },
    {
      path: '/tareas',
      name: 'todos',
      component: () => import('@/pages/Todos/TodosPage.vue')
    }
  ]
})

export default router
