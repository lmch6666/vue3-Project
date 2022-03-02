import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import type { sealInterceptors, AddAxiosConfig, DataType } from './type'
import { ElLoading } from 'element-plus'

let text = ''
const BASE_URL = 'http://127.0.0.1:4523/mock/674014'

const TIME_OUT = 5000
const baseConfig = {
    baseURL: BASE_URL,
    timeout: TIME_OUT,
}

class AxRequest {
    instance: AxiosInstance
    interceptors?: sealInterceptors
    loading?: any
    text?: string = '正在请求中。。。'
    showLoading: boolean
    constructor(config: AddAxiosConfig) {
        this.showLoading = false
        text = config.text ?? '正在请求中。。。'
        this.instance = axios.create(Object.assign(baseConfig, config))
        this.interceptors = config.interceptors
        if (this.interceptors) {
            // 全局拦截器
            const { requestInterceptors, requestInterceptorsCatch, responseInterceptors, responseInterceptorsCatch } = this.interceptors
            this.instance.interceptors.request.use(requestInterceptors, requestInterceptorsCatch)
            this.instance.interceptors.response.use(responseInterceptors, responseInterceptorsCatch)
        }
        // 后添加的拦截器先执行
        this.instanceInterceptorsRequest()
        this.instanceInterceptorsResponse()
    }

    instanceInterceptorsRequest() {
        this.instance.interceptors.request.use((config) => {
            if (this.showLoading) {
                this.loading = ElLoading.service({
                    lock: true,
                    text
                })
            }
            return config
        }, (error) => {
            return error
        })
    }

    instanceInterceptorsResponse() {
        this.instance.interceptors.response.use((config) => {
            setTimeout(() => {
                this.loading?.close()
            }, 2000)
            return config
        }, (error) => {
            return error
        })
    }

    request<T>(config?: AddAxiosConfig<T>): Promise<T> {
        this.showLoading = config?.showLoading ?? false
        // 封装请求上的拦截器
        if (config?.interceptors?.requestInterceptors) {
            config = config.interceptors.requestInterceptors(config)
        }
        return new Promise((resolve, reject) => {
            this.instance.request<any, T>(config!).then((value) => {
                if (config?.interceptors?.responseInterceptors) {
                    value = config.interceptors.responseInterceptors(value)
                }
                resolve(value)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    get<T = any>(config?: AddAxiosConfig<T>) {
        return this.request<T>({ ...config, method: 'GET' })
    }

    post<T = any>(config?: AddAxiosConfig<T>) {
        return this.request<T>({ ...config, method: 'POST' })
    }

    delete<T = any>(config?: AddAxiosConfig<T>) {
        return this.request<T>({ ...config, method: 'DELETE' })
    }

    patch<T = any>(config?: AddAxiosConfig<T>) {
        return this.request<T>({ ...config, method: 'PATCH' })
    }

}

export default AxRequest