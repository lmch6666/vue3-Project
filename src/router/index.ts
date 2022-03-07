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
        name:'login',
        component: () => import('../views/login/login.vue')
    },
    {
         path:'/main',
         name: 'main',
         redirect: '/main/analysis/dashboard',
         component: () => import('../views/main/main.vue'),
         meta:{
             name: '系统总览'
         }
    },
    {
        path:'/:pathMatch(.*)*',
        component: () => import('../views/not-found/index.vue'),
        meta:{
            error: true
        }
    }
]


const router = createRouter({
    history:createWebHashHistory(),
    routes 
})


router.beforeEach((to) => {
    
    //刷新空白时, 通过to来获取路径 手动跳转
    // if(to.meta.error){
    //     router.push({
    //         path: '/main'
    //     })
    // }
    if(to.path !== '/login'){
        const result = getLocalStorage("token")
        if(!result){
            return router.push('/login')
        }
    }
})




export default router