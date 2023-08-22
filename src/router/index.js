import { createRouter, createWebHistory } from 'vue-router'
import SwipeView from '@/views/SwipeView.vue';
import ConnectionView from '@/views/ConnectionView.vue';
import RecapView from '@/views/RecapView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'swipe',
      component: SwipeView
    },
    {
      path: '/login',
      name: 'connection',
      component: ConnectionView
    },
    {
      path: '/recap',
      name: 'recap',
      component: RecapView
    }
  ]
});

export default router
