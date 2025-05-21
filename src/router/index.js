import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/account/ProfileView.vue'
import SignInView from '@/views/account/SignInView.vue'
import SignUpView from '@/views/account/SignUpView.vue'
import MapView from '@/views/map/MapView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    // map
    {
      path: '/map',
      name: 'map',
      component: MapView,
    },

    // account
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },

  ],
})

export default router
