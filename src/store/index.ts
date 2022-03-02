import { createStore, useStore as useVuexStore, Store } from "vuex";
import loginModule from "./login/login";
import { getLocalStorage } from '../utils/cache'
import {Module} from './login/type'
const store = createStore({
    state:{
        pro: '21312'
    },
    modules:{
        login: loginModule
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