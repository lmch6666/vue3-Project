import { Module } from "vuex";
import { MenuResult } from './type'


const menuModule: Module<MenuResult, any> = {
    namespaced: true,
    state: {
        role: []
    },
    actions: {
    },
    mutations: {
    },
    getters: {}
}


export default menuModule
