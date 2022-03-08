import { config } from '../../../../base-ui/form/type'

// 这里 是单独的文件来配置页面
// user页面的配置文件
export const formconfig: config = {
    formType: [
        [
            {
                type: "text",
                label: "id",
                mapname: "id",
                placeholder: "请输入id",
            },
            {
                type: "text",
                label: "用户名",
                mapname: "username",
                placeholder: "请输入用户名",
            },
            {
                type: "text",
                label: "真实姓名",
                mapname: "truename",
                placeholder: "请输入真实姓名",
            },
        ],
        [
            {
                type: "text",
                label: "电话号码",
                mapname: "phone",
                placeholder: "请输入电话号码",
            },
            {
                type: "select",
                label: "状态",
                mapname: "state",
                placeholder: "选择状态",
                selectOption: [
                    {
                        label: '启用',
                        value: 'on'
                    },
                    {
                        label: '禁用',
                        value: 'off'
                    },
                    {
                        label: '默认',
                        value: 'default'
                    }
                ]

            },
            {
                type: "datepicker",
                mapname: "time",
                label: "日期",
            },
        ],
    ]
}  

export const tableconfig = {
    "id": {
        prop: "id",
        label: "编号",
        width: '200',
        slotName: 'id'
    },
    "name":{
        prop: "name",
        label: "用户名",
        width: '150',
        slotName: 'name'
    },
    "realname":{
        prop: "realname",
        label: "真实姓名",
        width: '150',
        slotName: 'realname'
    },
    "callphone":{
        prop: "callphone",
        label: "电话号",
        width: '150',
        slotName: 'callphone'
    },
    "enable":{
        prop: "enable",
        label: "是否可用",
        width: '150',
        slotName: 'enable'
    },
    "departmentId":{
        prop: "departmentId",
        label: "部门ID",
        width: '150',
        slotName: 'departmentId'
    },
    "roleId":{
        prop: "roleId",
        label: "权限",
        width: '150',
        slotName: 'roleId'
    },
    "createAt":{
        prop: "createAt",
        label: "创建时间",
        width: '200',
        slotName: 'createAt'
    },
    "updateAt":{
        prop: "updateAt",
        label: "更新时间",
        width: '200',
        slotName: 'updateAt'
    }
}