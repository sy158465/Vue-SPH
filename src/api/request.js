// axios的二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress';
import "nprogress/nprogress.css"

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000,
});
//1. 请求拦截器
requests.interceptors.request.use(function (config) {
    // console.log(config.url)
    //1.1  任何请求都会经过这一步   在发送请求之前做些什么
    // config.headers.mytoken = 'nihao';
    //1.2  这里一定要return   否则配置不成功
    nprogress.start();
    return config;
}, function (err) {
    //1.3 对请求错误做点什么
    console.log(err)
});
//2. 响应拦截器
requests.interceptors.response.use(function (res) {
    //2.1  在接收响应做些什么
    nprogress.done();
    var data = res.data;
    return data;
}, function (err) {
    //2.2 对响应错误做点什么
    console.log(err)
});
export default requests;