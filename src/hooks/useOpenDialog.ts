import { reactive, ref, nextTick } from 'vue'
import { collectMenulistKeys } from '../utils/formatMenuList'

export function useOpenDialog(info: any) {
  let dialogRef = ref();
  const treedialogRef = ref();
  // let userinfo: any = ref(info);
  let userinfo: any = reactive(info);

  function edit(value: any) {
    // userinfo.value = value;
    for (const key in value) {
      userinfo[key] = value[key]
    }
    if (dialogRef.value) {
      dialogRef.value.DialogVisible = true
      dialogRef.value.title = '更改数据'
    }

    if (value.menuList) {
      const list = collectMenulistKeys(value.menuList)

      nextTick(() => {
        console.log(list);
         treedialogRef.value.setCheckedKeys(list, false)
      })
     
    }
  }

  function createbtn() {
    for (const key in userinfo) {
      // userinfo.value[key] = null
      userinfo[key] = null
    }

    if (dialogRef.value) {
      dialogRef.value.DialogVisible = true
      dialogRef.value.title = '新建数据'
    }
  }

  return [dialogRef, treedialogRef, userinfo, edit, createbtn]
}
