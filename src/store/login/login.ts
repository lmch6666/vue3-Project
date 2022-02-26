

import {Module} from 'vuex' 

import type {Login} from './type'

const loginModule:Module<Login,any> = {

    namespaced: true,
    state: {
        token: '',
        data: null
    },
    // getters: ,
    actions: {
        AccountLoginAciton({commit},value){
            commit('AccountLogin',value)
        },
        PhoneLoginAciton({commit},value){
            commit('PhoneLogin',value)
        }
    },
    mutations: {
        AccountLogin(state, value){
            state.data = value
        },
        PhoneLogin(state,value){

        }
    }
}

export default loginModule