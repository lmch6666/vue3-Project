<template>
  <el-row :gutter="10">
    <el-col :span="7">
      <PieEchart title="分类商品数量" :optiondata="data1" />
    </el-col>
    <el-col :span="10">
      <RadarEchart title="不同城市商品销量" :optiondata="data5"  />
    </el-col>
    <el-col :span="7">
      <RoseEchart title="分类商品数量(玫瑰图)" :optiondata="data2" />
    </el-col>
  </el-row>
  <el-row :gutter="10">
    <el-col :span="12">
      <LineEchart title="分类商品数量" :optiondata="data3" />
    </el-col>
    <el-col :span="12">
      <BarEchart title="不同城市商品销量" :optiondata="data4" />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  RadarEchart
} from "@/components/echartsComponent";

const data1 = ref([
  { value: 1048, name: "Search Engine" },
  { value: 735, name: "Direct" },
  { value: 580, name: "Email" },
  { value: 484, name: "Union Ads" },
  { value: 300, name: "Video Ads" },
]);
const data2 = ref([
  { value: 40, name: "rose 1" },
  { value: 38, name: "rose 2" },
  { value: 32, name: "rose 3" },
  { value: 30, name: "rose 4" },
  { value: 28, name: "rose 5" },
  { value: 26, name: "rose 6" },
  { value: 22, name: "rose 7" },
  { value: 18, name: "rose 8" },
]);
const data3 = ref([820, 932, 901, 934, 1290, 1330, 1320]);

const data4 = ref([120, 200, 150, 80, 70, 110, 130]);

const data5 = ref([
  {
    value: [4200, 3000, 20000, 35000, 50000, 18000],
    name: "Allocated Budget",
  },
  {
    value: [5000, 14000, 28000, 26000, 42000, 21000],
    name: "Actual Spending",
  },
]);
</script>

<style>
</style>
