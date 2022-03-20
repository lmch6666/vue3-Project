<template>
  <el-form :model="formRef" :label-width="labelWidth">
    <el-row v-for="(item, index) in formType" :key="index">
      <el-col v-bind="col" v-for="i in item" :key="i.label">
        <template v-if="i.type == 'text'">
          <el-form-item :label="i.label">
            <el-input
              v-model="formRef[i.mapname!]"
              :placeholder="i.placeholder"
            ></el-input>
          </el-form-item>
        </template>
        <template v-else-if="i.type == 'select'">
          <el-form-item :label="i.label">
            <el-select
              v-model="formRef[i.mapname!]"
              class="m-2"
              :placeholder="i.placeholder"
              size="large"
            >
              <template v-for="v in i.selectOption">
                <el-option :label="v.label" :value="v.value"></el-option>
              </template>
            </el-select>
          </el-form-item>
        </template>
        <template v-else-if="i.type == 'datepicker'">
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="formRef[i.mapname!]"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-value="[new Date(Date.now()), new Date(Date.now())]"
            >
            </el-date-picker>
          </el-form-item>
        </template>
      </el-col>
    </el-row>
    <el-row justify="end">
      <slot name="btngroup"></slot>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  defineProps,
  defineEmits,
  PropType,
  watch,
  watchEffect,
} from "vue";
import type { formConfigType } from "./type";
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  formType: {
    type: Array as PropType<Array<formConfigType[]>>,
    default: () => [],
  },
  col: {
    type: Object,
    default: () => ({
      xs: 24,
      sm: 24,
      md: 12,
      lg: 8,
      xl: 8,
    }),
  },
  labelWidth: {
    type: String,
    default: "120px",
  },
  modelValue: {
    type: Object,
    required: true,
  },
});

//  组件v-model 双向绑定  不违背单向数据流的原则
const formRef = ref({ ...props.modelValue });


watch(
  formRef,
  (newvalue) => {
    emit("update:modelValue", newvalue);
  },
  {
    deep: true,
  }
);

// watchEffect(() => {
//   if (formRef.value) {
//     console.log(formRef.value);
//     emit("update:modelValue", formRef.value);
//   }
// });

// 也可以使用 model-value  属性结合update:modelvalue自定义事件来使用
</script>

<style scoped>
</style>
