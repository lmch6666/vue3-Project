<template>
  <div class="pain">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="titlename">你好{{ userdata.nickname }}</span>
          <span>当前是北京时间{{ curtime }}</span>
          <span>还剩{{ lefttime }}小时就到明天辣 你准备好了吗</span>
        </div>
      </template>

      <el-upload class="upload-demo" :on-change="selectFile" drag action="http://localhost:3000/upload">
        <el-icon class="el-icon--upload"></el-icon> 
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
      </el-upload>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { uploadFunction } from '../../../../service/upload'
const store = useStore();
const userdata = computed(() => {
  return store.state.login.userinfo;
});
const time = ref(new Date().toLocaleString());
const date = new Date();
const curtime = computed(() => {
  return time;
});

const lefttime = ref();

setInterval(() => {
  time.value = new Date().toLocaleString();
  lefttime.value = gettormorr(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate() + 1
  );
}, 1000);

function gettormorr(i: any, j: any, k: any) {
  let result = "";
  let tortime = new Date(i, j, k).getTime();
  let nowtime = new Date().getTime();
  let distime = tortime - nowtime;
  let h1 = distime % (24 * 3600 * 1000); //获取当前的剩余的纳秒数
  let hours = Math.floor(h1 / (3600 * 1000)); // 转化成具体小时
  let m1 = h1 % (3600 * 1000); // 获取还有多少分钟的纳秒数
  let minutes = Math.floor(m1 / (60 * 1000)); // 转化为具体分钟
  let s1 = m1 % (60 * 1000); // 获取还有多少秒的纳秒数
  let seconds = Math.floor(s1 / 1000); // 转化为 具体秒
  return `${hours}时${minutes}分${seconds}秒`;
}

</script>

<style scoped>
.titlename {
  font-weight: 700;
}
</style>
