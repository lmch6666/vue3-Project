import AxRequest from "../sealaxios";
import type { productlist } from './type'

const goods = new AxRequest({
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
    return goods.get<productlist>({
        url: '/goodslist',
        params: option
    })
}

export function delgoods(id: string) {
    return goods.delete({
        url: `/goodslist/${id}`
    })
}

export function addgoods(value: any) {
    return goods.post({
        url: '/goodslist',
        data: value,
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function updategoods(value:any) {
    return goods.put({
        url: `/goodslist/${value.id}`,
        data: value,
        headers: {
            'content-type': 'application/json'
        }
    })
}
