import { Module } from "vuex";
import type { Role } from './type'
import { rolelist, addrole, delrole, modifiyrole } from '../../service/role/index'

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
        },
        async add ({ commit }, value: any){
            const result = await addrole(value)
            return result
        },

        async del({ commit }, id: any){
            const result = await delrole(id)
            return result
        },

        async modifiy({ commit },value:any) {
            const id = value.id
            const result = await modifiyrole(value, id)
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
