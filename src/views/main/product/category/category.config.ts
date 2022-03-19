export const tableconfig = [
  {
    prop: "id",
    label: "编号",
    width: '500',
    slotName: 'id'
  },
  {
    prop: "name",
    label: "名称",
    width: '500',
    slotName: 'name'
  },
  {
    prop: "desc",
    label: "描述",
    width: '400',
    slotName: 'desc'
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
        label: "描述",
        mapname: "desc",
        placeholder: "请输入分类描述",
      }
    ]
  ]
}
