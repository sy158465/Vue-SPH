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
// 通过ID删除购物车的数据  /api/cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });
// /api/cart/checkCart/{skuId}/{isChecked}
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

//  获取验证码/api/user/passport/sendCode/{phone}   get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });
// 注册用户 /api/user/passport/register        post        phone,password,code
export const reqUserRegister = (data) => requests({ url: `/user/passport/register`, data, method: "post" });
// 用户登录  /api/user/passport/login         POST   phone，password
export const reqUserLogin = (data) => requests({ url: `/user/passport/login`, data, method: "post" });
// 获取用户信息  /api/user/passport/auth/getUserInfo       get
export const reqUserInfo = () => requests({ url: `/user/passport/auth/getUserInfo`, method: "get" });
// 退出登录  /api/user/passport/logout        GET
export const reqLogout = () => requests({ url: `/user/passport/logout`, method: "get" });
// 获取用户地址信息  /api/user/userAddress/auth/findUserAddressList         get
export const reqGetUserAddressList = () => requests({ url: `/user/userAddress/auth/findUserAddressList`, method: "get" });
// 获取订单交易页信息  /api/order/auth/trade       get
export const reqGetOrderInfo = () => requests({ url: `/order/auth/trade`, method: "get" });


