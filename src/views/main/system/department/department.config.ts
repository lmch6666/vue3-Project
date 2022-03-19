export const tableconfig = [
  {
    prop: "id",
    label: "编号",
    width: '700',
    slotName: 'id'
  },
  {
    prop: "name",
    label: "部门名称",
    width: '700',
    slotName: 'name'
  }
]


export const dialogconfig = {
  formType: [
    [
      {
        type: "text",
        label: "id",
        mapname: "id",
        placeholder: "请输入Id",
      },
      {
        type: "select",
        label: "部门名",
        mapname: "name",
        placeholder: "请输入部门名称",
      }
    ]
  ]
}
