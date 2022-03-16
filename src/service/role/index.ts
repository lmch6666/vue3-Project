import AxRequest from '../sealaxios'
import { rolelistDate, roles } from '../type'
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
export function rolelist(option: any) {
    return role.get<rolelistDate[]>({
        url: '/rolelist',
        params: option
    })
}

export function roles() {
    return role.get<roles[]>({
        url: '/role'
    })
}

export function addrole(value: any) {
    return role.post({
        url: '/rolelist',
        data: value,
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function delrole(id: any) {
    return role.delete<any>({
        url: `/rolelist/${id}`
    })
}

export function modifiyrole(value: any, id: string) {
    return role.put<any>({
        url: `/rolelist/${id}`,
        data: value,
        headers: {
            'content-type': 'application/json'
        }
    })
}


export function rolemenu() {
    return role.get({
        url:'/rolemenu'
    })
}
