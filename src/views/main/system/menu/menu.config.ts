

export const tableconfig:Array<any> = [
    {
        prop: "name",
        label: "菜单名称",
        width: '350',
        slotName: 'name'
    },
    {
        prop: "type",
        label: "菜单类型",
        width: '350',
        slotName: 'type'
    },
    {
        prop: "url",
        label: "菜单路径",
        width: '350',
        slotName: 'url'
    },
    {
        prop: "permission",
        label: "菜单权限",
        width: '350',
        slotName: 'permission'
    }
]


export const tabletreeconfig:any = {
    "row-key": "id",
    "tree-props": {
        children: 'children'
    }
}
