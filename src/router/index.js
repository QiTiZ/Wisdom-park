import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Camp/index.vue')
      },
      {
        path: '/inout',
        component: () => import('../views/InOut.vue')
      },
      {
        path: '/control',
        component: () => import('../views/Control.vue')
      },
      {
        path: '/energy',
        component: () => import('../views/Energy.vue')
      },
      {
        path: '/setting',
        component: () => import('../views/Setting.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
