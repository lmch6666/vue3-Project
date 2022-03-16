import type { AxiosRequestConfig, AxiosResponse } from "axios"


export interface sealInterceptors<T = AxiosResponse> {
    requestInterceptors?: (params: AxiosRequestConfig) => AxiosRequestConfig,
    requestInterceptorsCatch?: (params: any) => any,
    responseInterceptors?: (params: T) => T,
    responseInterceptorsCatch?: (params: any) => any
}
// 使每个接口有了联动的特性  使某个属性的类型 变得更加动态了
export interface AddAxiosConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: sealInterceptors<T>,
    showLoading?: boolean,
    text?: string
}

export interface DataType {
    data: any
    code: string
    success: boolean
}

export interface userlistDate {
    id: string,
    name: string,
    realname: string,
    callphone: string,
    enable: string,
    departmentId: string,
    roleId: string,
    createAt: string,
    updateAt: string
}


export interface rolelistDate {
    id:string
    name:string
    intro: string
    createAt: string,
    updateAt: string
}


export interface roles {
    id:string
    name:string
}


export interface adduser {
    id:string
    name: string,
    realname: string,
    callphone: string,
    enable: string,
    departmentId: string,
    roleId: string,
    createAt?:string
    updateAt?:string
}
