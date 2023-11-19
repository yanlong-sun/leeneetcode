import { createRouter, createWebHashHistory } from 'vue-router'
import AllPractice from '@/views/AllPractice/AllPractice.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
    },
    {
      path: '/allPractice',
      name: AllPractice,
      component: AllPractice
    }
  ]
})