import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
// 引入路由
import router from '@/router'
//引入store
import store from '@/store'
import '@/mock/mockServe'

// 引入 Swiper styles
import 'swiper/css/swiper.css';
Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store
}).$mount('#app')
