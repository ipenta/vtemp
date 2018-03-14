import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/component/layout/Layout'

// import Dashboard from '@/page/dashboard/Dashboard'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Layout
        // redirect: '/dashboard',
        // children: [{
        //     path: 'dashboard',
        //     component: Dashboard
        // }]
    }]
})
