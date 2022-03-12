import { Module } from "vuex";
import type { Role } from './type'
import { rolelist } from '../../service/role/index'


const roleMoule: Module<Role, any> = {
    namespaced: true,
    state: {
        rolelist: [],
        count: 0
    },
    actions: {
        async getrolelist({ commit }, value: any = {}) {
            const result = await rolelist(value)
            commit('changerolelist', result)
            commit('changeconut', result.length)
            return result
        }
    },
    mutations: {
        changerolelist(state, value) {
            state.rolelist = value
        },
        changeconut(state, value) {
            state.count = value
        }
    },
    getters: {}
}

export default roleMoule