<template>
  <div class="search">
    <Mform v-bind="formconfig" v-model="formdata">
      <template #btngroup v-if="isquery">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search" >搜索</el-button>
      </template>
    </Mform>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  defineProps,
  watch,
  defineEmits,
  defineExpose,
  computed,
  getCurrentInstance
} from "vue";
import { Mform } from "../../base-ui/index";
import { usePermission } from '../../hooks/usePermission'
const instance = getCurrentInstance()
const emits = defineEmits(["receive"]);
const props = defineProps({
  formconfig: {
    type: Object,
    default: () => ({}),
  },
  form: {
    type: Object,
    default: () => ({}),
  },
  pagename:{
    type:String
  }
});
const isquery = usePermission(props.pagename!,'query')

const formdata = reactive({ ...props.form })

function reset() {
  for (const key in formdata) {
    formdata[key] = null;
  }
  instance?.parent?.setupState.receiveParams(formdata)
}

function search() {
  emits('receive', formdata)
}

</script>

<style scoped>
.search {
  padding: 30px 100px;
}
</style>
