import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import Store from './store/index'
import './style/normalize.css'
import 'element-plus/dist/index.css'
import registerComponents from './global/registerComponents'
import { initStoreData } from './store/index'


createApp(App).use(Router).use(Store).use(registerComponents).mount('#app')

initStoreData()




