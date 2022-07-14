import {reqBaseCategoryList} from '@/api'
//准备state对象——保存具体的数据
const state = {};
//准备actions对象——响应组件中用户的动作
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    categoryList(){
        let result = reqBaseCategoryList();
        console.log(result);
    }
};
//准备mutations对象——修改state中的数据
const mutations = {};
const getters = {};
export default {
    state,
    actions,
    mutations,
    getters
  }
