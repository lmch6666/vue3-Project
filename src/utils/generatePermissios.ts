
export function generatePermission(data:[]) {
  const list: string[] = []
  getpermission(data,list)
  return list
}

function getpermission(arr: any[], value: string[]) {
  arr.forEach((item) => {
    if (item.type == 1 || item.type == 2) {
      if (item.children) {
        return getpermission(item.children, value)
      }
    } else if (item.type == 3) {
      value.push(item.permission)
    }
  })
}
