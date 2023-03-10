//引入一个名为{createApp}的工厂函数（首字母不用大写，不用new）
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'
import 'element-plus/dist/index.css'
//不加就请求的前端ip,并且是跨域
/* axios.defaults.baseURL = 'http://192.168.1.140:9091' */
//创建应用实例对象-app
const app = createApp(App)
/* app.config.globalProperties.$axios = axios */
app.use(router)
app.use(ElementPlus)
app.mount('#app')
/* 卸载
setTimeout(()=>{
  app.unmount()
},1000) */

