import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) //仓库
export default new Vuex.Store({
    state: {
        author: 'jing',
        seachText: {
            value:''
        },
        zhuangtai:{
            num:''
        },
        
    },
    mutations: {
        // 数据
        setText(state, data) {
            state.seachText = data
        },
        // 订单状态数
        setzhuangTai(state,data){
            state.zhuangtai=data
        }
    },
    actions: {
        setText(context, data) {
            // 触发mutations
            context.commit('setText', data)
        },
         // 状态
         setzhuangTai(context,data){
            context.commit('setzhuangTai',data)
        }
    },
    getters: {
        getText(state) {
            return state.seachText
        },
        getzhuangTai(state){
            return state.zhuangtai.num
        }
    }
})