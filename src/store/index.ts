import { createStore } from "vuex";
import loginModule from "./login/login";
const store = createStore({
    state:{
        pro: '21312'
    },
    modules:{
        login: loginModule
    }
})


export default store