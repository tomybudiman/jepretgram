import Vue from 'vue'
import Router from 'vue-router'
import Access from '@/components/Access'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/access',
      component: Access
    }
  ]
})
