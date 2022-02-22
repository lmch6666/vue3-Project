import type {AxiosRequestConfig, AxiosResponse} from "axios"


export interface sealInterceptors {
    requestInterceptors?: (params:AxiosRequestConfig) => AxiosRequestConfig,
    requestInterceptorsCatch?: (params:any) => any,
    responseInterceptors?: (params:AxiosResponse) => AxiosResponse,
    responseInterceptorsCatch?: (params:any) => any
}

export interface AddInterceptorsConfig extends AxiosRequestConfig {
    interceptors?: sealInterceptors
}
