type inputType = "text"  | "select" | "datepicker"



export interface formConfigType {
    type?: inputType
    label?: string
    rules?: Array<any>
    placeholder?: string
    selectOption?: any
    datepickerOption?: any,
    mapname?:string
}

export type largeWidth = string


export interface config {
    formType:Array<formConfigType[]>
    largeWidth?:largeWidth,
    col?: any,
    modelValue?: object
    selectOption?: any
}


export interface tableconfig {
    prop: string
    label: string
    width: string
    slotName: string
}
