// 登录与注册仓库
import { reqGetCode, reqUserRegister, reqUserLogin } from '@/api'
const state = {
    code: '',
    token: '',
};
const actions = {
    // 验证码
    async getCode ({ commit }, phone) {
        let result = await reqGetCode(phone);
        // console.log(result);
        if (result.code == 200) {
            commit("GETCODE", result.data);
        }
    },
    // 注册用户
    async userRegister ({ commit }, user) {
        let result = await reqUserRegister(user);
        // console.log(result);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('fail:' + result.message));
        }
    },
    //登录业务
    async userLogin ({ commit }, data) {
        let result = await reqUserLogin(data);
        //服务器下发token，用户唯一标识符(uuid)
        //将来经常通过带token找服务器要用户信息进行展示
        console.log(result);
        if (result.code == 200) {
            //用户已经登录成功且获取到token
            commit("USERLOGIN", result.data.token);
            //持久化存储token
            // setToken(result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error("fail" + error.message));
        }
    },
};
const mutations = {
    GETCODE (state, code) {
        state.code = code;
    },
    USERLOGIN (state, token) {
        state.token = token;
    },
};
const getters = {

};
export default {
    state,
    actions,
    mutations,
    getters
}
