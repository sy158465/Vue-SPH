//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引入store
//应用Vuex插件
Vue.use(Vuex)

import home from './home'
import search from './search'

//创建并暴露store
export default new Vuex.Store({
    //模块：把小仓库进行合并变为大仓库
    modules: {
        home,
        search
    }
})