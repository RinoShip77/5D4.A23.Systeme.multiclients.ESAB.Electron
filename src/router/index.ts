import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'allies',
      component: () => import('@/views/pages/AlliesPage.vue')
    },
    {
      path: '/elements',
      name: 'elements',
      component: () => import('@/views/pages/ElementsPage.vue')
    },
    {
      path: '/scoreboard',
      name: 'scoreboard',
      component: () => import('@/views/pages/ScoreboardPage.vue')
    }
  ]
});

export default router;