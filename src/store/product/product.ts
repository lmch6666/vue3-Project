import { Module } from "vuex"
import type { product } from './type'
import { goodslist, addgoods, delgoods, updategoods } from '../../service/product/product'
const productModule: Module<product, any> = {
    namespaced: true,
    state: {
        productlist: [],
        count: 0
    },
    actions: {
        async getgoodslist({ commit }, option: any = {}) {
            const result = await goodslist(option);
            commit('changelist', result.list)
            return result
        },
        async addgood({ commit }, value) {
            await addgoods(value)
        },
        async modifiygood({ commit }, value) {
            await updategoods(value)
        },
        async delgood({ commit }, value) {
            await delgoods(value)
        }
    },
    mutations: {
        changelist(state, value) {
            state.productlist = value
        },
        changecount(state, value) {
            state.count = value
        }
    },
    getters: {
        getgoodslist(state) {
            return state.productlist
        },
        getgoodscount(state) {
            return state.count
        }
    }
}


export default productModule
