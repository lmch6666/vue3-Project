import { createStore, useStore as useVuexStore, Store } from "vuex";
import loginModule from "./login/login";
import userModule  from "./user/user";
import { getLocalStorage } from '../utils/cache'
import {Module} from './login/type'
const store = createStore({
    state:{
        pro: '21312'
    },
    modules:{
        login: loginModule,
        user: userModule
    }
})

export function initStoreData(){
    if(getLocalStorage("token")){
        store.dispatch("login/initData")
    }
}

export function useStore():Store<Module> {
    return useVuexStore()
}

export default store