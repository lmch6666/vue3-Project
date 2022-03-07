const user = () => import('../../../../views/main/system/user/user.vue')

export default  {
    path: '/main/system/user',
    name: 'user',
    component: user,
    children:[],
    meta:{
        name: '用户'
    }
}