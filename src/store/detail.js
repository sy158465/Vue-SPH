import { reqGetGoodsInfo,reqAddOrUpdateShopCart } from '@/api'
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodsInfo: {},
    uuid_token:getUUID()
};
const actions = {
    async getGoodsInfo ({ commit }, skuId) {
        let res = await reqGetGoodsInfo(skuId);
        if (res.code == 200) {
            commit("GETGOODSINFO", res.data);
        }
    },
    async addOrUpdateShopCart ({ commit }, {skuId,skuNum}) {
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        if (result.code == 200) {
            //返回的是成功的标记
            return "ok";
          } else {
            //返回的是失败的标记
            return Promise.reject(new Error("faile"));
          }
    },
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