
import { login, getUserInof, getUserRouter } from '../../service/login/index'
import { menulist } from '../../service/menu/menu'
import { Module } from 'vuex'
import { setLocalStorage } from '../../utils/cache'
import { generatePermission } from '../../utils/generatePermissios'
import type { Login, loginResult, AccountPassword } from './type'
import router from '../../router'
import { getLocalStorage } from '../../utils/cache'
import { generate } from '../../utils/generateRouter'
import { savedata } from '../../utils/reactive'
function setlocal(str: string, data: any) {
    setLocalStorage(str, data)
}

const loginModule: Module<Login, any> = {
    namespaced: true,
    state: {
        token: '',
        userinfo: null,
        phone: '',
        router: [],
        permissionlist: [],
        PermissionRouter: []
    },
    getters: {
        getpermissionlist(state) {
            return state.permissionlist
        }
    },
    actions: {
        async AccountLoginAciton({ commit }, value: AccountPassword) {
            const result = await login(value).catch((error) => error)
            if (result.state == 'success') {
                const { data: { id, name, token } } = result
                commit('changeToken', token)
                setlocal("token", token)
                // 请求 用户数据
                const userinfo = await getUserInof(id)
                commit('changeUserData', userinfo)
                setlocal("Data", JSON.stringify(userinfo))
                // 请求 用户的路由权限
                const userRouter = await getUserRouter(userinfo.type)
                const permissionlist = await menulist({ id: 1 })
                commit("changeMenu", userRouter[0].role)
                commit('commitPermissionRouter', permissionlist[0].role)
                setlocal("PermissionRouter", permissionlist[0].role)
                const list = generatePermission(permissionlist[0].role)
                commit("commitPermissionlist", list)
                setlocal("Menu", JSON.stringify(userRouter[0].role))
                savedata('permission', list)
                //跳转
                router.push('/main')
            } else if (result.state == 'error') {
                return '密码错误'
            }
        },
        PhoneLoginAciton({ commit }, value) {
            commit('PhoneLogin', value)
        },
        initData({ commit }) {
            const token = getLocalStorage("token")
            if (token) {
                commit("changeToken", token)
            }
            const Data = getLocalStorage("Data")
            if (Data) {
                commit("changeUserData", Data)
            }
            const Menu = getLocalStorage("Menu")
            if (Menu) {
                commit("changeMenu", JSON.parse(Menu))
            }
            const PermissionRouter = getLocalStorage("PermissionRouter")
            if (PermissionRouter) {
                commit('commitPermissionRouter', PermissionRouter)
                const list = generatePermission(PermissionRouter)
                commit("commitPermissionlist", list)
            }
        },
        getpermissionlist({ commit }, value) {
            commit('commitPermissionlist', value)
        }
    },
    mutations: {
        changeToken(state, value) {
            state.token = value
        },
        changeUserData(state, value) {
            state.userinfo = value
        },
        changeMenu(state, value) {
            state.router = value
            const result = generate(value);
            result.forEach((route) => {
                router.addRoute('main', route)
            })
        },
        commitPermissionlist(state, value) {
            state.permissionlist = value
        },
        commitPermissionRouter(state, value) {
            state.PermissionRouter = value
        }
    }
}

export default loginModule

