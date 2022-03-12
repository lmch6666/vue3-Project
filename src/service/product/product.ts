import AxRequest from "../sealaxios";
import type { productlist } from './type'

const role = new AxRequest({
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
export function goodslist(option: any) {
    return role.get<productlist>({
        url: '/goodslist',
        params: option
    })
}