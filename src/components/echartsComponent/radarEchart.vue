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
    title: {
      text: "Basic Radar Chart",
    },
    legend: {
      data: ["Allocated Budget", "Actual Spending"],
    },
    radar: {
      indicator: [
        { name: "Sales", max: 6500 },
        { name: "Administration", max: 16000 },
        { name: "Information Technology", max: 30000 },
        { name: "Customer Support", max: 38000 },
        { name: "Development", max: 52000 },
        { name: "Marketing", max: 25000 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: props.optiondata
      },
    ],
  };
});
</script>

<style>
</style>
