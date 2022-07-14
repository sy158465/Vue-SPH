import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
// 引入路由
import router from '@/router'
//引入store
import store from '@/store'

Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store
}).$mount('#app')
