import type { Module } from "vuex"
import { delDepartment, addDepartment, updateDepartment } from '../../service/department/department'

const departmentModule: Module<any, any> = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async modifiyDepart({ commit }, value) {
      const result = await updateDepartment(value)
      return result
    },
    async delDepart({ commit }, id) {
      const result = await delDepartment(id)
      return result
    },
    async addDepart({ commit }, value: any) {
      const result = await addDepartment(value)
      return result
    }
  }
}


export default departmentModule
