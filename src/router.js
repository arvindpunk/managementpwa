import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Bin from './components/Bin'
import Staff from './components/Staff'
import Inventory from './components/Inventory'
import axios from 'axios'
import VueSesssion from 'vue-session'
import VueCookies from 'vue-cookies'

Vue.use(Router)
Vue.use(VueSesssion)
Vue.use(VueCookies)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
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
    {
      path: '/dashboard',
      component: Dashboard
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(from);
//   console.log(to);
//   if (to === from) next(false);
//   else next();
// })

// router.replace('/');


export default router

