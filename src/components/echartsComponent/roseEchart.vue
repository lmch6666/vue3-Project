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
import { EChartsOption } from "echarts";

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

// legend: {
//   top: "bottom",
// },
const optionsConfig = computed(() => {
  return {
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [10, 150],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: props.optiondata,
      },
    ],
  } as EChartsOption;
}) as unknown as EChartsOption;
</script>

<style>
</style>
