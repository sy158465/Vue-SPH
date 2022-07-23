import Vue from 'vue'
import App from './App.vue'
// 引入全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 引入路由
import router from '@/router'
//引入store
import store from '@/store'
import '@/mock/mockServe'
// 引入 Swiper
import 'swiper/css/swiper.css';
// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
// 注册全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate () {
    Vue.prototype.$bus = this;
  },
  // 注册路由
  router,
  store
}).$mount('#app')
