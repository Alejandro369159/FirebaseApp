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
    },
    {
      path: '/tarea/:id',
      name: 'todo',
      component: () => import('@/pages/Todo/TodoPage.vue')
    },
    {
      path: '/crear-tarea',
      name: 'create-todo',
      component: () => import('@/pages/Create/CreateTodo.vue')
    }
  ]
})

export default router
