import axios from "axios";
import type {AxiosInstance, AxiosRequestConfig} from "axios"
import type {sealInterceptors, AddInterceptorsConfig} from './type'

class AxRequest {
    instance: AxiosInstance
    interceptors?: sealInterceptors

    
    constructor(config: AddInterceptorsConfig){
        this.instance = axios.create(config)
        this.interceptors = config.interceptors
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptors,
            this.interceptors?.requestInterceptorsCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptors,
            this.interceptors?.responseInterceptorsCatch
        )
          // 后添加的拦截器先执行
        this.instance.interceptors.request.use(() => {}, ()=> {})
        this.instance.interceptors.response.use(() => {}, ()=> {})
    }

    request(config?: AxiosRequestConfig){
        this.instance.request(config!).then((value:any) => {
            console.log(value)
        })
    }
}

export default AxRequest