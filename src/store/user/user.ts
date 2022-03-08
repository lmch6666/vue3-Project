import { Module } from "vuex";
import type {User} from './type'
import { userlist } from '../../service/user/index'

const userModule:Module<User,any> = {
    namespaced:true,
    state:{
        userlist: [],
        count: 0
    },
    actions:{
        async getuserlist ({commit}, option) {
            const result = await userlist(option)
            commit('changeUserlist',result)
            commit('changeCount',result.length)
            return result
        }
    },
    mutations:{
        changeUserlist(state,value){
            state.userlist = value
        },
        changeCount(state,value){
            state.count = value
        }
    }
}


export default userModule