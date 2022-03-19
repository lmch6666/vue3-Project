
export const formconfig = [
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
            mapname: "truename",
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

export const tableconfig = [
    {
        prop: "id",
        label: "编号",
        width: '200',
        slotName: 'id'
    },
    {
        prop: "name",
        label: "名称",
        width: '200',
        slotName: 'name'
    },
    {
        prop: "imgurl",
        label: "图片",
        width: '300',
        slotName: 'imgurl'
    },
    {
        prop: "oldprice",
        label: "原价",
        width: '100',
        slotName: 'oldprice'
    },
    {
        prop: "newprice",
        label: "现价",
        width: '100',
        slotName: 'newprice'
    },
    {
        prop: "status",
        label: "状态",
        width: '100',
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

export const dialogconfig = {
    formType: [
        [
            {
                type: "text",
                label: "名称",
                mapname: "name",
                placeholder: "请输入名称",
            },
            {
                type: "text",
                label: "图片url",
                mapname: "realname",
                placeholder: "请输入图片url",
            },
            {
                type: "text",
                label: "原价",
                mapname: "oldprice",
                placeholder: "请输入原价",
            },
            {
                type: "text",
                label: "现价",
                mapname: "newprice",
                placeholder: "请输入现价",
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
            }
        ]
    ]
}
