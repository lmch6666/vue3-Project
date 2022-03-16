import { createStore, useStore as useVuexStore, Store } from "vuex";
import loginModule from "./login/login";
import userModule from "./user/user";
import { getLocalStorage } from '../utils/cache'
import { Module } from './login/type'
import roleMoule from "./role/role";
import productModule from "./product/product";
import menuModule from './menu/menu'
import { roles, rolemenu } from '../service/role/index'
import { departmentlist } from '../service/department/department'
const store = createStore({
    state: {
        roles: [],
        departments: [],
        rolemenulist: []
    },
    actions: {
        async getroles({ commit }) {
            const result = await roles();
            commit('commitRoles', result)
        },
        async getDepartment({ commit }) {
            const result = await departmentlist()
            commit('commitDepartments', result)
        },
        async rolesmenu({ commit }) {
            const result = await rolemenu();
            commit('commitRoleMenulist', result)
        }
    },
    mutations: {
        commitRoles(state, value) {
            state.roles = value
        },
        commitDepartments(state, value) {
            state.departments = value
        },
        commitRoleMenulist(state, value){
            state.rolemenulist = value
        }
    },
    modules: {
        login: loginModule,
        user: userModule,
        role: roleMoule,
        product: productModule,
        menu: menuModule
    }
})

export function initStoreData() {
    if (getLocalStorage("token")) {
        store.dispatch("login/initData")
        store.dispatch("getroles")
        store.dispatch("getDepartment")
        store.dispatch("rolesmenu")
    }
}

export function useStore(): Store<Module> {
    return useVuexStore()
}

export default store
