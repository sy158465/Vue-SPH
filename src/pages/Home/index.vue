<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from "vuex";

export default {
  components: {
    ListContainer, TodayRecommend, Rank, Like, Floor, Brand
  },
  mounted () {
    // 通知Vuex发请求，获取数据，存储在仓库中
    this.$store.dispatch('getFloorList');
  },
  //计算属性
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList
    }),
  },
}
</script>

<style>
</style>

