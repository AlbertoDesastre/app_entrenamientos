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
      // Las rutas que en el parámetro reciben una función anónima con el componente a renderizar hacen lazy-loading de gratis.
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
      // Si el usuario termina en la ruta "/auth" simplemente, le redirijo a login automáticamente
      redirect: { name: 'login' },
      /*
      Estas rutas saldrán siempre después de la "/auth/", dependiendo del caso de uso.
      Nótese como las hijas no necesita declarar el "/" al principio de path
      */
      children: [
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/user/components/RegisterForm/RegisterForm.vue'),
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/user/components/LoginForm/LoginForm.vue'),
        },
      ],
    },
  ],
})

export default router
