import { Module } from "vuex"
import type {product} from './type'
import { goodslist }  from '../../service/product/product'
const productModule:Module<product,any> = {
    namespaced:true,
    state:{
        productlist:[],
        count:0
    },
    actions:{
        async getgoodslist({commit},option:any = {}){
            const result = await goodslist(option);
            commit('changelist', result.list)
            return result
        }
    },
    mutations:{
        changelist(state, value){
            state.productlist = value
        },
        changecount(state, value){
            state.count = value
        }
    },
    getters:{
        getgoodslist(state){
            return state.productlist
        },
        getgoodscount(state){
            return state.count
        }
    }
}


export default productModule