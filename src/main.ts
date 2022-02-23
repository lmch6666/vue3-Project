import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import Store from './store/index'
// import 'element-plus/theme-chalk/base.css'
import 'element-plus/dist/index.css'
import registerComponents from './global/registerComponents'
import {instance} from './service/index'
import type { DataType } from './service/type'


instance.request<DataType>({
  url: '/profile',
  method: 'get',
  showLoading:false
}).then((value) => {
  console.log(value);
})


instance.get({
  url: '/posts',
  method: 'get',
  showLoading:true
}).then((value) => {
  console.log(value);
})



createApp(App).use(Router).use(Store).use(registerComponents).mount('#app')


