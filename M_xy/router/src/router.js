import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Forget from './views/Forget.vue'
import Reg from './views/Reg.vue'
import Add_to from './views/Add_to.vue'
import Home_page from './views/Home_page.vue'
import Loign from './views/Loign.vue'
import Box from './views/Box.vue'
import Details from './views/Details.vue'
import Bigbox from './views/Bigbox.vue'
import Open from "./views/Open.vue"
import Recoed from "./views/Recoed.vue"
import User from "./views/User.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // children: [

      // ]
    },
    {
      path: '/Forget',
      name: 'forget',
      component: Forget,
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg,
    },

    {
      path: '/Add_to',
      name: 'add',
      component: Add_to,
    },
    {
      path: '/Home_page',
      name: 'Home_page',
      component: Home_page,
    },
    {
      path: '/Loign',
      name: 'Loign',
      component: Loign,
    },
    {
      path: '/Box',
      name: 'box',
      component: Box,
      children: [
        
      ]
    },
    {
      path: '/Details',
      name: 'details',
      component: Details,
    },
    {
      path: '/Open',
      name: 'open',
      component: Open
    },
    {
      path: '/Recoed',
      name: 'recoed',
      component: Recoed
    },
    {
      path: '/User',
      name: 'user',
      component: User
    },
    {
      path: '/Bigbox',
      name: 'bigbox',
      component: Bigbox,
    },

  ]
})
