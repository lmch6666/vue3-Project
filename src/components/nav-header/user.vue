<template>
  <el-dropdown>
    <div class="el-dropdown-link">
       <el-avatar :size="30" :src="user.img"></el-avatar>
       <span>{{user.nickname}}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="ESC">退出登陆</el-dropdown-item>
        <el-dropdown-item>用户信息</el-dropdown-item>
        <el-dropdown-item>系统管理</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { getLocalStorage } from '../../utils/cache'

const userdata = JSON.parse(getLocalStorage('Data'))

const user = reactive(userdata)

 function ESC (){
     console.log('123123');
 }
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>