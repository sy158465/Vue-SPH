// axios二次封装
import axios from 'axios'
import nprogress from "nprogress";
import store from '@/store';
//如果出现进度条没有显示：一定是你忘记了引入样式了
import "nprogress/nprogress.css";
const requests = axios.create({
    baseURL: "/api",
    timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config) => {
    if (store.state.detail.uuid_token) {
        //请求头添加一个字段(userTempId):和后台老师商量好了
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    //需要携带token带给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    nprogress.start();
    nprogress.start();
    return config
}, function (err) {
    console.log(err)
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    //进度条结束
    nprogress.done();
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})

//对外暴露
export default requests
