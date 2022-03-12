import AxRequest from '../sealaxios'
import { rolelistDate } from '../type'
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
export function rolelist(option:any) {
    return role.get<rolelistDate[]>({
        url: '/rolelist',
        params:option
    })
}