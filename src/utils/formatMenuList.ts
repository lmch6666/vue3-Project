const res: any = []
export function formatmenulist(root: any, ver: Array<any>) {
  format(root, ver)

  const menulist = as1(res, ver)

  let type1 = menulist.filter((item: any) => {
    return item.type == 1
  })

  for (const key of type1) {
    const children = key.children
    for (let index = 0; index < children.length; index++) {
      const item = menulist.find((item: any) => {
        return item.id == children[index].id
      })
      if (item) {
        children[index] = item
      } else {
        if (!ver.includes(children[index].id)) {
          children.splice(index, 1)
          index--
        }
      }
    }
  }
  return type1
}

function format(root: any, ver: Array<any>) {
  for (const key of root) {
    if (ver.includes(key.id)) {
      if (key.children) {
        res.push(key)
        format(key.children, ver)
      }
    }
  }
}

function as1(res: any, ver: Array<any>) {
  for (let i = 0; i < res.length; i++) {
    if (res[i].type == 1) {
      as1(res[i].children, ver)
    } else if (res[i].type == 2) {
      if (ver.includes(res[i].id)) {
        if (res[i].children) {
          as1(res[i].children, ver)
        }
      }
    } else if (res[i].type == 3) {
      if (!ver.includes(res[i].id)) {
        res.splice(i, 1);
      }
    }
  }
  return res
}


export function collectMenulistKeys(value: any) {
  const keylist: Array<any> = [];

  function collect(params: any) {
    for (const key of params) {
      if (key.children) {
        collect(key.children)
      } else {
        keylist.push(key.id)
      }
    }
  }
  collect(value)
  return keylist
}
