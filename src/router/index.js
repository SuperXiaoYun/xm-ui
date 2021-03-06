import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/script/store/store'
import * as types from '@/script/store/types'
import Personal from '@/components/personalCenter'
import TeamBuilding from '@/components/teamBuilding'
import OrderDetail from '@/components/orderDetail'
import Home from '@/components/home'
import Login from '@/components/login'
import Register from '@/components/register'
import AgentMerchant from '@/components/agentMerchant'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/personal',
    name: 'Personal',
    component: Personal,
    meta: {
        requireAuth: true,
    }
},
{
    path: '/teamBuilding',
    name: 'Team Building',
    component: TeamBuilding,
    meta: {
        requireAuth: true,
    }
},
{
    path: '/orderDetail',
    name: 'Order Detail',
    component: OrderDetail,
    meta: {
        requireAuth: true,
    }
},
{
    path: '/register',
    name: 'Register',
    component: Register,
},
{
    path: '/agentMerchant',
    name: 'AgentMerchant',
    component: AgentMerchant,
}
];


// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        } else {
            if (from.name == 'login')
                return;
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next();
    }
})

export default router;