import { Module } from "vuex";
import { MenuResult } from './type'
import { menulist } from '../../service/menu/menu'
import role from "@/router/main/system/role/role";

const menuModule: Module<MenuResult, any> = {
    namespaced: true,
    state: {
        role: []
    },
    actions: {
        async getmenulist({commit},id: any) {
            const option = { id };
            const result = await menulist(option);
            commit('changerole',result.role)
            return result.role
        }
    },
    mutations: {
        changerole(state,value){
            state.role = value
        }
    },
    getters: {}
}


export default menuModule