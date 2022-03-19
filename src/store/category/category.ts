import { Module } from "vuex";
import { category } from './type'
import { getcategorylist, addcategory, updatecategory, delcategory } from '../../service/category/category'
const categoryModule: Module<category,any> = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    commitList(state, value) {
      state.list = value
    }
  },
  actions: {
    async getlist({ commit }, value) {
      const result = await getcategorylist(value)
      commit('commitList', result)
      return result
    },
    async add({ commit }, value) {
      const result = await addcategory(value)
    },
    async modifiy({commit}, value) {
      const result = await updatecategory(value)
    },
    async del({commit}, value){
      const result = await delcategory(value)
    }
  }
}


export default categoryModule
