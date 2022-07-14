import Vue from "vue"
import VueRouter from "vue-router"
// 使用插件
Vue.use(VueRouter)
// 捕获push replace中的错误
// 当然在replace中的错误也是可以相同的进行捕获
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}
// 引入路由组件
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
//配置路由
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { show: true }

        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        {
            path: "/search/:keyword?",
            component: Search,
            meta: { show: true },
            name: "search"
        },
        {
            path: "*",
            redirect: "/home"
        }
    ]
})
