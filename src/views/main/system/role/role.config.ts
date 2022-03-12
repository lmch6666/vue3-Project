import { config } from '../../../../base-ui/form/type'

// 这里 是单独的文件来配置页面
// user页面的配置文件
export const formconfig: config = {
    formType: [
        [
            {
                type: "text",
                label: "角色名称",
                mapname: "name",
                placeholder: "请输入角色名称",
            },
            {
                type: "text",
                label: "权限",
                mapname: "intro",
                placeholder: "请输入权限名称",
            },
            {
                type: "datepicker",
                mapname: "time",
                label: "日期",
            }
        ]
    ]
}

export const tableconfig = [
    {
        prop: "id",
        label: "id",
        width: '290',
        slotName: 'id'
    },
    {
        prop: "name",
        label: "角色名称",
        width: '290',
        slotName: 'name'
    },
    {
        prop: "intro",
        label: "权限",
        width: '290',
        slotName: 'intro'
    },
    {
        prop: "createAt",
        label: "创建时间",
        width: '290',
        slotName: 'createAt'
    },
    {
        prop: "updateAt",
        label: "更新时间",
        width: '290',
        slotName: 'updateAt'
    }
]