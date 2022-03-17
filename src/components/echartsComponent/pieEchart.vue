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
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: props.optiondata,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
});
</script>

<style>
</style>
