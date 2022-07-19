/*
包含所有接口请求函数的模块
*/
import requests from './request'
import mockRequests from './mockServe'

//获取商品的三级分类列表
export const reqBaseCategoryList = () => requests.get('/product/getBaseCategoryList');
// 首页轮播图数据
export const reqGetBannerList = () => mockRequests.get('/banner');
// 底部轮播图数据
export const reqGetFloorList = () => mockRequests.get('/floor');
// 搜索请求
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });
// 产品详情数据/item/{ skuId }
export const reqGetGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: "get" });
//将产品添加到购物车中（获取更新某一个产品的个数）
///api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" })
// 获取购物车数据cart/cartList
export const reqGetCartList = () => requests({ url: `/cart/cartList`, method: "get" });
