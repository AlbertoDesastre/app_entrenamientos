import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/training',
      name: 'training',
      component: () => import('@/modules/training/views/TrainingView.vue'),
    },
    {
      path: '/forum',
      name: 'forum',
      component: () => import('@/modules/forum/views/ForumView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/modules/user/views/AuthenticationView.vue'),
    },
  ],
})

export default router
