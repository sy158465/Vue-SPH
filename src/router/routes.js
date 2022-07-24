/*
所有路由配置的数组
*/
// 引入路由组件
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"
import PaySuccess from "@/pages/PaySuccess"
import Center from "@/pages/Center"
import MyOrder from "@/pages/Center/myOrder"
import GroupOrder from "@/pages/Center/groupOrder.vue"

export default [
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
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true },
        name: "detail"
    },
    {
        path: "/addCartSuccess",
        component: AddCartSuccess,
        meta: { show: true },
        name: "addCartSuccess"
    },
    {
        path: "/shopCart",
        component: ShopCart,
        meta: { show: true },
        name: "shopCart"
    },
    {
        path: "/trade",
        name: "trade",
        component: Trade,
        meta: { show: true },
    },
    {
        path: "/pay",
        name: "pay",
        component: Pay,
        meta: { show: true },
    },
    {
        path: "/paySuccess",
        name: "paySuccess",
        component: PaySuccess,
        meta: { show: true },
    },
    {
        path: "/center",
        name: "center",
        component: Center,
        children: [{
            // path: '/center/myorder',
            path: 'myOrder',
            component: MyOrder,
            name: "myOrder",

        },
        {
            path: 'groupOrder',
            component: GroupOrder,
            name: "groupOrder",

        },
        {
            path: '',
            redirect: 'myOrder'
        }
        ]
    },
    {
        path: "*",
        redirect: "/home"
    }
]
