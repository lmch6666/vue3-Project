<template>
  <el-dialog
    v-model="modelValue"
    title="新建用户"
    width="30%"
    destroy-on-close
    center
  >
    <Mform v-bind="dialogconfig" :col="col" v-model="userdata" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="modelValue = false">取消</el-button>
        <el-button type="primary" @click="modelValue = false">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, watch, reactive } from "vue";
import { Mform } from "../../base-ui/index";

const emit = defineEmits(["update:modelValue"]);
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
  modelValue: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});

let userdata = reactive({ ...props.user });

watch(
  () => props.user,
  (newval) => {
    for (const key in newval) {
      if (Object.prototype.hasOwnProperty.call(newval, key)) {
        userdata[key] = newval[key];
      }
    }
  },
  { deep: true }
);

watch(
  () => props.modelValue,
  (nval) => {
    emit("update:modelValue", nval);
  }
);
</script>

<style scoped>
</style>
