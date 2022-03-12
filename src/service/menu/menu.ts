import AxRequest from "../sealaxios";
import { Menu } from './type'

const menu = new AxRequest({
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


export function menulist(option: any) {
    return menu.get({
        url: '/menulist',
        params: option
    })
}