<template>
  <el-dialog
    v-model="DialogVisible"
    :title="title"
    width="30%"
    destroy-on-close
    center
    ref="dialog"
  >
    <Mform v-bind="dialogconfig" :col="col" v-model="userdata" />

    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {
  ref,
  defineEmits,
  defineProps,
  watch,
  reactive,
  defineExpose,
} from "vue";
import { Mform } from "../../base-ui/index";

const emit = defineEmits(["senddata"]);
const props = defineProps({
  dialogconfig: {
    type: Object,
    default: () => ({}),
    required: true,
  },
  col: {
    type: Object,
    default: () => ({
      xs: 24,
    }),
  },
  user: {
    type: Object,
    default: () => ({}),
    required: true,
  }
});
let title = ref("新建数据");
const dialog = ref()
let userdata = ref({ ...props.user });
let DialogVisible = ref(false);

watch(
  () => props.user,
  (val) => {
    userdata.value = val;
  },
  { deep: true }
);

function confirm() {
  let isedit = title.value == "更改数据";
  emit("senddata", { ...userdata.value }, isedit);
  close();
}

function cancel() {
  close();
}

function close() {
  DialogVisible.value = false;
  for (const key in userdata.value) {
    userdata.value[key] = null;
  }
}

defineExpose({
  DialogVisible,
  title,
  dialog
});
</script>

<style scoped>
</style>
