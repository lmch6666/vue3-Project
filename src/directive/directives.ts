import { App, computed, ref } from 'vue'
import { getdata } from '../utils/reactive'
const list = ref()
let isflush: boolean = false
export default {
  install(app: App) {
    app.directive('permission', (el, binding) => {
      if (!isflush) {
        list.value = getdata('permission')
        isflush = true
      }
      binding.value?.forEach((item: any) => {
        if (!(list.value?.some((i: any) => i == item))) {
          el.style.display = 'none'
        }
      });
    })
  }
}
