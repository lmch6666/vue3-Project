const information = () => import('../../../../views/main/product/information/information.vue')

export default  {
    path: '/main/product/information',
    name: 'information',
    component: information,
    children:[],
    meta:{
        name: '信息'
    }
}