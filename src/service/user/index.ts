import AxRequest from "../sealaxios"
import type { Ref } from "vue"
import { userlistDate } from '../type'


const user = new AxRequest({
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


export function userlist() {
  return user.get<userlistDate>({
        url:'/userlist'
    })
}