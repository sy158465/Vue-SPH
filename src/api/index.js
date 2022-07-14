/*
包含所有接口请求函数的模块
*/
import request from './request'

//获取商品的三级分类列表
export const reqBaseCategoryList = () => request.get('/product/getBaseCategoryList')
