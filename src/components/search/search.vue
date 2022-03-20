<template>
  <div class="search">
    <Mform v-bind="formconfig" v-model="formdata">
      <template #btngroup v-if="isquery">
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
  getCurrentInstance,
} from "vue";
import { Mform } from "../../base-ui/index";
import { usePermission } from "../../hooks/usePermission";
import type { Component } from "../../base-ui/table/type";
const instance = getCurrentInstance();
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
  pagename: {
    type: String,
  },
});
const isquery = usePermission(props.pagename!, "query");

let formdata = ref({ ...props.form });

function reset() {
  for (const key in formdata.value) {
    formdata.value[key] = null;
  }
  const parents: Component | null | undefined = instance?.parent?.parent;
  const method = parents?.setupState?.getUserlistDate;
  parents?.setupState.receiveParams(formdata.value);
}

function search() {
  console.log(formdata.value);
  emits("receive", formdata.value);
}
</script>

<style scoped>
.search {
  padding: 30px 100px;
}
</style>
