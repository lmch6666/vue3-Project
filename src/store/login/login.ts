
import {login, getUserInof, getUserRouter} from '../../service/login/index'
import {Module} from 'vuex' 
import {setLocalStorage} from  '../../utils/cache'
import type {Login, loginResult} from './type'
import router from '../../router'
import {getLocalStorage} from '../../utils/cache'

const loginModule:Module<Login,any> = {

    namespaced: true,
    state: {
        token: '',
        userinfo: null,
        phone: '',
        router: []
    },
    // getters: ,
    actions: {
       async AccountLoginAciton({commit},value){
            const result = await login(value).catch((error) => error)
            if(result.state == 'success'){
                const {data:{id,name,token}} = result
                commit('changeToken',token)
                setLocalStorage("token", token)
                // 请求 用户数据
                const userinfo = await getUserInof(id)
                commit('changeUserData',userinfo)
                setLocalStorage("Data", userinfo)
                // 请求 用户的路由权限
                const userRouter = await getUserRouter(userinfo.type)
                commit("changeMenu", userRouter)
                setLocalStorage("Menu", JSON.stringify(userRouter))
                //跳转
                router.push('/main')
            } else if(result.state =='error'){
                return '密码错误'
            }
        },
        PhoneLoginAciton({commit},value){
            commit('PhoneLogin',value)
        },
        initData({commit}){
            const token = getLocalStorage("token")
            if(token){
                commit("changeToken",token)
            }
            const Data = getLocalStorage("Data")
            if(Data){
                commit("changeUserData",Data)
            }
            const Menu = getLocalStorage("Menu")
            if(Menu){
                commit("changeMenu",JSON.parse(Menu))
            }
        }
    },
    mutations: {
        changeToken(state, value){
            state.token = value
        },
        changeUserData(state,value){
            state.userinfo = value
        },
        changeMenu(state,value){
            state.router = value
        }
    }
}

export default loginModule