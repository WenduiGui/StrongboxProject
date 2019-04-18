import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import RegisteredUsers from './views/RegisteredUsers.vue'
import Password from './views/Password.vue'
import MyStrongbox from './views/MyStrongbox.vue'
import Add from './views/Add.vue'
import SafeboxHead from './views/SafeboxHead.vue'
import Strongbox from './views/Strongbox.vue'
import Subrouter from './Subrouter.vue'
import OpeningRecord from './views/OpeningRecord.vue'
import AlarmRecord from  './views/AlarmRecord.vue'
import AssociatedUsers from  './views/AssociatedUsers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/RegisteredUsers',
      name: 'RegisteredUsers',
      component: RegisteredUsers
    },
    {
      path: '/Password',
      name: 'Password',
      component: Password
    },
    {
      path: '/MyStrongbox',
      name: 'MyStrongbox',
      component: MyStrongbox
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/SafeboxHead',
      name: 'SafeboxHead',
      component: SafeboxHead
    },
    {
      path: '/Strongbox',
      name: 'Strongbox',
      component: Strongbox,
      children: [
        {
          path: '/Subrouter',
          name: 'Subrouter',
          component: Subrouter,
        }
      ]
    },
    {
      path: '/OpeningRecord',
      name: 'OpeningRecord',
      component:OpeningRecord,
    },
    {
      path: '/AlarmRecord',
      name: 'AlarmRecord',
      component:AlarmRecord
    },
    {
      path: '/AssociatedUsers',
      name: 'AssociatedUsers',
      component:AssociatedUsers
    },
  ]
})
