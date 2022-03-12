import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import Store from './store/index'
import './style/normalize.css'
import 'element-plus/dist/index.css'
import registerComponents from './global/registerComponents'
import { initStoreData } from './store/index'
import filter from './global/filter'
import directive from './directive/directives'
const app = createApp(App).use(Store).use(directive).use(registerComponents)

initStoreData();

// 动态路由刷新空白两种解决方式
//  1. 在路由守卫当中拿到路径手动跳转
//  2. 延迟注册路由
app.use(Router)

// app.config.globalProperties定义全局的属性
filter(app)

app.mount('#app')
