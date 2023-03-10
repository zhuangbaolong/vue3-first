import AppVue from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutViewVue from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutViewVue
    },
    {
      path: '/about2',
      name: 'about2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView2.vue'),
      redirect:'/about2/page1',
      children: [
        {
          path: "page1",
          component: () => import('../views/PageView1.vue')
        },
        {
          path: "page2",
          component: () => import('../views/PageView2.vue')
        }
      ]
    }
  ]
})

export default router
