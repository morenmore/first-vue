import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  },
  {
    path: '/free',
    name: 'Free',
    component: () => import(/* webpackChunkName: "free" */ '@/views/Free')
  },
  {
    path: '/write',
    name: 'Write',
    component: () => import(/* webpackChunkName: "write" */ '@/views/Write')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
