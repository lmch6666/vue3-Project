<template>
  <div class="dialog">
    <el-dialog
      v-model="modelValue"
      title="新建用户"
      width="30%"
      destroy-on-close
      center
    >
      <Mform :formType="dialogconfig" v-model="userdata" :col="col" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="modelValue = false">取消</el-button>
          <el-button type="primary" @click="modelValue = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from "vue";
import { Mform } from "../../base-ui/index";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  dialogconfig: {
    type: Array,
    default: () => [],
    required: true,
  },
  userdata: {
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
});

watch(
  () => props.modelValue,
  (nval) => {
    emit("update:modelValue", nval);
  }
);
</script>

<style scoped>
</style>
