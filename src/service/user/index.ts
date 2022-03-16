import AxRequest from "../sealaxios"
import { userlistDate, adduser } from '../type'

const user = new AxRequest({
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

export function userlist(option: any) {
    return user.get<userlistDate[]>({
        url: '/userlist',
        params: option
    })
}

export function deluser(id: string) {
    return user.delete<any>({
        url: `/userlist/${id}`
    })
}

export function adduser(value: adduser) {
    return user.post({
        url: '/userlist',
        data: value,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function modifiyuser(value: adduser) {
    const id = value.id
    return user.put({
        url: `/userlist/${id}`,
        data: value,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
