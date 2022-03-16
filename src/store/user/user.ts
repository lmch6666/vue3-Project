import { Module } from "vuex";
import type { User } from './type'
import { userlist, deluser as del, adduser, modifiyuser } from '../../service/user/index'

const userModule: Module<User, any> = {
    namespaced: true,
    state: {
        userlist: [],
        count: 0
    },
    actions: {
        async getuserlist({ commit }, option) {
            const result = await userlist(option)
            commit('changeUserlist', result)
            commit('changeCount', result.length)
            return result
        },
        async deluser({ dispatch }, id) {
            const result = await del(id);
            // dispatch('getuserlist')
            return result
        },
        async adduser({ commit }, value: any) {
            const result = await adduser(value)
            return result
        },
        async modifiyuser({ commit }, value: any) {
            const result = await modifiyuser(value)
            return result
        }
    },
    getters: {
        getUserlist(state) {
            return state.userlist
        }
    },
    mutations: {
        changeUserlist(state, value) {
            state.userlist = value
        },
        changeCount(state, value) {
            state.count = value
        }
    }
}


export default userModule
