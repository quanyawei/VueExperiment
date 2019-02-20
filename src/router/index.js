import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Member from '@/components/member/member'
import Search from '@/components/search/search'
import Shopcar from '@/components/shopcar/shopcar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar
    }
  ]
})
