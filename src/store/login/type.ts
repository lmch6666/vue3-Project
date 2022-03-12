import { AxiosResponse } from "axios";
import { type } from "os";

export interface Login {
    token: string
    state?: string
    phone?: string
    code?: string
    userinfo?:any,
    router?:Array<any>
    permissionlist:[],
    PermissionRouter:[]
}

export interface resultType<T = any> {
    state: string,
    data: T,
    code:string
}


export interface loginResult {
    name?: string
    token: string
}


export interface userinfo {
    nikename: string
    img:string
    sign: string
    type: string
}


export interface role {
    name: string
    id:number,
    type: number,
    url: string,
    icon: string,
    children: Array<role>
}

export interface Module {
    login: Login
}


export interface AccountPassword {
    account: string
    password: string
}


export interface roleinside {
    id: any,
    role: role[]
}

export type roleResult = [roleinside]
