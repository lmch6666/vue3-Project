 <template>
  <div>
    主页
    {{ $store.state.pro }}
     <el-button :plain="true" @click="open">Show message</el-button>
     <el-button :plain="true" @click="openVn">VNode</el-button>
  </div>
</template>
 
 <script setup lang='ts'>
 import { h } from 'vue'
 import { ElMessage } from 'element-plus'
  const open = () => {
  ElMessage('this is a message.')
}
const openVn = () => {
  ElMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
  
</script>
 
 <style>
</style>