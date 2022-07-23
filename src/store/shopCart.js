import { reqGetCartList, reqDeleteCartById } from '@/api'
const state = {
    cartList: []
};
const actions = {
    async getCartList ({ commit }) {
        let result = await reqGetCartList();
        // console.log(result);
        if (result.code == 200) {
            commit("GETCARTLIST", result.data);
        }
    },
    async deleteCartById ({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        console.log(result);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
};
const mutations = {
    GETCARTLIST (state, cartList) {
        state.cartList = cartList;
    }
};
const getters = {
    cartList (state) {
        return state.cartList[0] || {};
    }
};
export default {
    state,
    actions,
    mutations,
    getters
}