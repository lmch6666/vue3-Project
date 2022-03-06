import AxRequest from "../sealaxios"
import type { Ref } from "vue"
import {resultType,loginResult,userinfo, roleResult} from '../../store/login/type'

enum URL  {
    login = '/login',
    userinfo = '/userinfo',
    getRole =  '/getRole'
}

const loginR = new AxRequest({
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


const getRole = new AxRequest({
    baseURL: 'http://localhost:5000/',
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

export function login(data:any) {
  return loginR.post<resultType<loginResult>>({
        url:URL.login,
        params: data
    })
}

export function getUserInof(id:string) {
  return loginR.get<userinfo>({
        url:`${URL.userinfo}?id=${id}`,
    })
}

export function getUserRouter(id:string){
    return getRole.get<roleResult>({
        url:`${URL.getRole}?id=${id}`,
    })
}

