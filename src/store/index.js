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
    home,
    search
})