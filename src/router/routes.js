/*
所有路由配置的数组
*/
export default [
    {
        path: "/home",
        component: () => import('@/pages/Home'),
        meta: { show: true }

    },
    {
        path: "/login",
        component: () => import('@/pages/Login'),
        meta: { show: false }
    },
    {
        path: "/register",
        component: () => import('@/pages/Register'),
        meta: { show: false }
    },
    {
        path: "/search/:keyword?",
        component: () => import('@/pages/Search'),
        meta: { show: true },
        name: "search"
    },
    {
        path: "/detail/:skuid",
        component: () => import('@/pages/Detail'),
        meta: { show: true },
        name: "detail"
    },
    {
        path: "/addCartSuccess",
        component: () => import('@/pages/AddCartSuccess'),
        meta: { show: true },
        name: "addCartSuccess"
    },
    {
        path: "/shopCart",
        component: () => import('@/pages/ShopCart'),
        meta: { show: true },
        name: "shopCart"
    },
    {
        path: "/trade",
        name: "trade",
        component: () => import('@/pages/Trade'),
        meta: { show: true },
        /* 只能从购物车界面, 才能跳转到交易界面 */
        beforeEnter (to, from, next) {
            if (from.path === '/shopcart') {
                next()
            } else {
                next('/shopcart')
            }
        }
    },
    {
        path: "/pay",
        name: "pay",
        component: () => import('@/pages/Pay'),
        meta: { show: true },
        /* 只能从交易界面, 才能跳转到支付界面 */
        beforeEnter (to, from, next) {
            if (from.path === '/trade') {
                next();
            } else {
                next('/trade');
            }
        }
    },
    {
        path: "/paySuccess",
        name: "paySuccess",
        component: () => import('@/pages/PaySuccess'),
        meta: { show: true },
    },
    {
        path: "/center",
        component: () => import('@/pages/Center'),
        children: [{
            // path: '/center/myorder',
            path: 'myOrder',
            component: () => import('@/pages/Center/myOrder'),
            name: "myOrder",

        },
        {
            path: 'groupOrder',
            component: () => import('@/pages/Center/groupOrder'),
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
