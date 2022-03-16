import { config, tableconfig as tableconfigType } from '../../../../base-ui/form/type'

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
                mapname: "name",
                placeholder: "请输入用户名",
            },
            {
                type: "text",
                label: "真实姓名",
                mapname: "realname",
                placeholder: "请输入真实姓名",
            },
        ],
        [
            {
                type: "text",
                label: "电话号码",
                mapname: "callphone",
                placeholder: "请输入电话号码",
            },
            {
                type: "select",
                label: "状态",
                mapname: "enable",
                placeholder: "选择状态",
                selectOption: [
                    {
                        label: '启用',
                        value: '1'
                    },
                    {
                        label: '禁用',
                        value: '2'
                    },
                    {
                        label: '默认',
                        value: '3'
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

export const tableconfig: tableconfigType[] = [
    {
        prop: "id",
        label: "编号",
        width: '200',
        slotName: 'id'
    },
    {
        prop: "name",
        label: "用户名",
        width: '200',
        slotName: 'name'
    },
    {
        prop: "realname",
        label: "真实姓名",
        width: '200',
        slotName: 'realname'
    },
    {
        prop: "callphone",
        label: "电话号",
        width: '200',
        slotName: 'callphone'
    },
    {
        prop: "enable",
        label: "是否可用",
        width: '150',
        slotName: 'enable'
    },
    {
        prop: "createAt",
        label: "创建时间",
        width: '220',
        slotName: 'createAt'
    },
    {
        prop: "updateAt",
        label: "更新时间",
        width: '220',
        slotName: 'updateAt'
    }
]


export const dialogconfig: config = {
    formType: [
        [
            {
                type: "text",
                label: "用户名",
                mapname: "name",
                placeholder: "请输入用户名",
            },
            {
                type: "text",
                label: "真实姓名",
                mapname: "realname",
                placeholder: "请输入真实姓名",
            },
            {
                type: "text",
                label: "电话号码",
                mapname: "callphone",
                placeholder: "请输入电话号码",
            },
            {
                type: "select",
                label: "状态",
                mapname: "enable",
                placeholder: "选择状态",
                selectOption: [
                    {
                        label: '启用',
                        value: '1'
                    },
                    {
                        label: '禁用',
                        value: '2'
                    },
                    {
                        label: '默认',
                        value: '3'
                    }
                ]
            },
            {
                type: "select",
                label: "部门",
                mapname: "departmentId",
                placeholder: "选择部门",
            },
            {
                type: "select",
                label: "角色",
                mapname: "roleId",
                placeholder: "选择角色",
                selectOption: []
            }
        ]
    ]
}
