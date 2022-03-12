<template>
  <div class="search">
    <Mform v-bind="formconfig" v-model="formdata">
      <template #btngroup>
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">搜索</el-button>
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
});

const formdata = reactive({ ...props.form });

function reset() {
  for (const key in formdata) {
    formdata[key] = "";
  }
  instance?.parent?.setupState.getUserlistDate()
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