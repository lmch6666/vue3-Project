<template>
  <el-card class="box-card">
    <template #header>
      <span class="textleft">{{ title }}</span>
    </template>
    <div ref="divRef" :style="{ width: width, height: height }"></div>
  </el-card>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  onMounted,
  defineEmits,
  defineProps,
  defineExpose,
  withDefaults,
  watchEffect,
} from "vue";
import useEcharts from "../../hooks/useEcharts";
import type { EChartsOption } from "echarts";
// ts props 写法
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    options: EChartsOption;
    title?: string;
  }>(),
  {
    width: "100%",
    height: "360px",
    title: "",
  }
);
const divRef = ref<HTMLElement>();

onMounted(() => {
  const { setOptions } = useEcharts(divRef.value);

  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style scoped>
.box-card {
  width: 100%;
}

.box-card >>> .el-card__header {
  text-align: left;
}
</style>
