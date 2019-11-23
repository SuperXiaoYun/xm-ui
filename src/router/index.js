import Vue from 'vue'
import Router from 'vue-router'
import Personal from '@/components/PersonalCenter'
import TeamBuilding from '@/components/TeamBuilding'
import OrderDetail from '@/components/OrderDetail'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/teamBuilding',
      name: 'Team Building',
      component: TeamBuilding
    },
    {
      path: '/orderDetail',
      name: 'Order Detail',
      component: OrderDetail
    }
  ]
})
