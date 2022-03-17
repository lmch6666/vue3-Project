
import * as echarts from "echarts";
import type { EChartsOption } from "echarts";

export default function (ele?: HTMLElement) {

  if (!ele) {
    return;
  }
  const createEcharts = echarts.init(ele);

  function setOptions(value: EChartsOption) {
    createEcharts.setOption(value)
  }

  window.addEventListener('size', () => {
    createEcharts.resize()
  })

  const echartresize = function () {
    createEcharts.resize()
  }

  return {
    setOptions,
    echartresize
  } as any
}
