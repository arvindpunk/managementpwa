import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Bin from './components/Bin'
import Staff from './components/Staff'
import Inventory from './components/Inventory'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/bin',
      component: Bin
    },
    {
      path: '/staff',
      component: Staff
    },
    {
      path: '/inventory',
      component: Inventory
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log(from);
  console.log(to);
  if (to === from) next(false);
  else next();
})

export default router

