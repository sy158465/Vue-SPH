import { reqBaseCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'
//准备state对象——保存具体的数据
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};
//准备actions对象——响应组件中用户的动作
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async getCategoryList ({ commit }) {
        //reqBaseCategoryList返回的是一个Promise对象
        //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
        let result = await reqBaseCategoryList();
        // console.log(result);
        if (result.code == 200) {
            commit("GETCATEGORYLIST", result.data);
        }
    },
    // 获取首页轮播图的数据
    async getBannerList ({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },// 获取底部轮播图的数据
    async getFloorList ({ commit }) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data);
        }
    }
};
//准备mutations对象——修改state中的数据
const mutations = {
    GETCATEGORYLIST (state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST (state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST (state, floorList) {
        state.floorList = floorList;
    }
};
const getters = {};
export default {
    state,
    actions,
    mutations,
    getters
}
