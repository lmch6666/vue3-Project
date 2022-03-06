import { config } from '../../../../base-ui/form/type'


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