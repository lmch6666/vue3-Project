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

const optionsConfig = computed(() => {
  return {
    xAxis: {
      type: "category",
      data: ["玩具", "食品", "水果", "五金", "粮食", "杂物", "生活用品"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: props.optiondata,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  } as EChartsOption;
}) as unknown as EChartsOption;
</script>

<style>
</style>
