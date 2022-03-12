import { createStore, useStore as useVuexStore, Store } from "vuex";
import loginModule from "./login/login";
import userModule from "./user/user";
import { getLocalStorage } from '../utils/cache'
import { Module } from './login/type'
import roleMoule from "./role/role";
import productModule from "./product/product";
import menuModule from './menu/menu'
const store = createStore({
    state: {
        pro: '21312'
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
    }
}

export function useStore(): Store<Module> {
    return useVuexStore()
}

export default store
