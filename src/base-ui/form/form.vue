<template>
  <div class="user">
    <el-form ref="formRef" :model="form" :label-width="labelWidth">
      <el-row v-for="(item, index) in config" :key="index">
        <el-col v-bind="col" v-for="i in item" :key="i.label">
          <template v-if="i.type == 'text'">
            <el-form-item :label="i.label">
              <el-input
                v-model="form[i.mapname]"
                :placeholder="i.placeholder"
              ></el-input>
            </el-form-item>
          </template>
          <template v-else-if="i.type == 'select'">
            <el-form-item label="状态">
              <el-select
                v-model="form[i.mapname]"
                class="m-2"
                placeholder="选择状态"
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
                v-model="form[i.mapname]"
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
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">搜索</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, defineEmits, PropType } from "vue";
import type { formConfigType } from "./type";
defineProps({
  config: {
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
  labelWidth:{
      type: String,
      default: "120px"
  }
});
const formRef = ref();

const form = reactive({
  id: "",
  username: "",
  truename: "",
  phone: "",
  state: "",
  time: "",
});

function reset() {}
function search() {}
</script>

<style scoped>
.user {
  padding: 30px 100px;
}
</style>