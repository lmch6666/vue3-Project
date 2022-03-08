import AxRequest from "../sealaxios"
import type { Ref } from "vue"
import { userlistDate } from '../type'

const user = new AxRequest({
    baseURL:' http://localhost:5000',
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

export function userlist(option:any) {
  return user.get<userlistDate[]>({
        url:'/userlist',
        params:option
    })
}