<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

export default {
  name: 'App',
  components: {
    Header, Footer
  },
  mounted () {
    // 通知Vuex发请求，获取数据，存储在仓库中
    this.$store.dispatch('getCategoryList');
  }
}
</script>

<style>
</style>
