import axios from "axios";
//创建axios实例
const loginService = axios.create({
  //设置baseURL地址
  baseURL: "http://localhost:9091",
  //配置请求超时时间
  timeout: 5000,
  withCredentials: true, //异步请求携带cookie
  //定义统一的请求头
  headers: {//可以不设置
    'Content-Type': "application/json;charset=UTF-8",
    'token': "",
    // "X-Requested-With": 'XMLHttpRequest',
    "App-Version": "",
    "Lng-Lat": "",
    "System-Version": "",
    "Mobile-Model": "",
    "Device": "",
  },
})
//请求拦截器
loginService.interceptors.request.use(config => {
  //config 配置对象 请求头
  return config
})
// 响应拦截器
requests.interceptors.response.use((resp) => {
  // 请求成功
  return resp.data
}, (error) => {
  console.log('请求失败....................')
  return Promise.error(new Error("请求失败"))
})
export default login