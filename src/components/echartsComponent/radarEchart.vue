<template>
  <Echarts
    :options="optionsConfig"
    :title="title"
    :width="width"
    :height="height"
  >
  </Echarts>
</template>

<script setup lang="ts">
import { Echarts } from "../index";
import { ref, reactive, defineProps, computed } from "vue";
import type { EChartsOption } from "echarts";
const props = defineProps({
  title: String,
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "360px",
  },
  optiondata: {
    default: () => ({}),
  },
});

const optionsConfig = computed(() => {
  return {
    legend: {
      data: ["环比增长", "利润增长"],
    },
    radar: {
      indicator: [
        { name: "销售额", max: 6500 },
        { name: "利润总额", max: 16000 },
        { name: "支出总额", max: 30000 },
        { name: "环比增长", max: 38000 },
        { name: "纯利润", max: 52000 },
        { name: "净增长", max: 25000 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: props.optiondata,
      },
    ],
  } as EChartsOption;
}) as unknown as EChartsOption;

 
</script>

<style>
</style>
