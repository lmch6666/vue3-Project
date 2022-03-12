import { App, computed, ref } from 'vue'
import { getdata } from '../utils/reactive'
const list = ref()
let isflush:boolean = false
export default {
  install(app: App) {

    app.directive('permission', (el, binding) => {
      if(!isflush){
        list.value = getdata('permission')
        isflush = true
      }
      // xxx
      console.log(list.value, binding.value);
      list.value?.forEach((item:any) => {
          if(!binding.value?.includes(item)){
            el.style.display = "none"
          }
      });
    })
  }
}
