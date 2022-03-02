import { createRouter, createWebHashHistory } from "vue-router";
// 只用来导入类型
import type { RouteRecordRaw } from "vue-router";
import {getLocalStorage} from '../utils/cache'

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path:'/login',
        component: () => import('../views/login/login.vue')
    },
    {
         path:'/main',
         component: () => import('../views/main/main.vue')
    }
]




const router = createRouter({
    history:createWebHashHistory(),
    routes 
})


router.beforeEach((to) => {
    if(to.path !== '/login'){
        const result = getLocalStorage("token")
        if(!result){
            return router.push('/login')
        }
    }
})


export default router