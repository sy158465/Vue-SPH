// axios二次封装
import axios from 'axios'

const requests = axios.create({
    baseURL:"/api",
    timeout:5000
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
    return config
}, function(err){
    console.log(err)
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
    return res.data
},(error)=>{
    return Promise.reject(new Error('faile'))
})

//对外暴露
export default requests
