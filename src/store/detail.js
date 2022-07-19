import { reqGetGoodsInfo } from '@/api'
const state = {
    goodsInfo: {}
};
const actions = {
    async getGoodsInfo ({ commit }, skuId) {
        let res = await reqGetGoodsInfo(skuId);
        if (res.code == 200) {
            commit("GETGOODSINFO", res.data);
        }
    }
};
const mutations = {
    GETGOODSINFO (state, goodsInfo) {
        state.goodsInfo = goodsInfo;
    }
};
const getters = {
    categoryView (state) {
        return state.goodsInfo.categoryView || {};
    },
    skuInfo (state) {
        return state.goodsInfo.skuInfo || {};
    },
    spuSaleAttrList (state) {
        return state.goodsInfo.spuSaleAttrList || [];
    },
};
export default {
    state,
    actions,
    mutations,
    getters
}