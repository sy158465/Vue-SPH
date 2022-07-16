/*
包含所有接口请求函数的模块
*/
import requests from './request'
import mockRequests from './mockServe'

//获取商品的三级分类列表
export const reqBaseCategoryList = () => requests.get('/product/getBaseCategoryList');
export const reqGetBannerList = () => mockRequests.get('/banner');
export const reqGetFloorList = () => mockRequests.get('/floor');
