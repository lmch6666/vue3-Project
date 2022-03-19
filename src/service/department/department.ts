import AxRequest from "../sealaxios";
import type { departmentlist } from './type'


const department = new AxRequest({
  baseURL: ' http://localhost:5000',
  interceptors: {
    requestInterceptors(config) {
      return config
    },
    requestInterceptorsCatch() {
      console.log('败了')
    },
    responseInterceptors(config) {
      return config.data
    },
    responseInterceptorsCatch() {
      console.log('丢了')
    }
  }
})


export function departmentlist() {
  return department.get<departmentlist[]>({
    url: '/departmentlist'
  })
}


export function delDepartment(id: any) {
  return department.delete({
    url: `/departmentlist/${id}`
  })
}

export function updateDepartment(value: any) {
  return department.put({
    url: `/departmentlist/${value.id}`,
    data: value,
    headers: {
      'content-type': 'application/json'
    }
  })
}

export function addDepartment(value: any) {
  return department.post({
    url: '/departmentlist',
    data: value,
    headers: {
      'content-type': 'application/json'
    }
  })
}
