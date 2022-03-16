<template>
  <div ref="divRef" :style="{width:'300px', height:'200px'}">
      overview
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import * as echarts from "echarts";

const divRef = ref<HTMLElement>();

onMounted(() => {
  const echartsInstance = echarts.init(divRef.value!);
  echartsInstance.setOption({
    title:{
      text: 'chenglea'
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  });
});
</script>

<style>
</style>
