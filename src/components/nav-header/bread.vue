<template>
  <div class="breadwarp">
    <el-breadcrumb separator="/">
        <template v-for="item in routerlist"> 
            <el-breadcrumb-item :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let routerlist: Array<any> =  reactive([]);
router.beforeResolve((to) => {
  routerlist.length = 0
  to.matched.forEach((item) => {
    routerlist.push({
      path: item.path,
      name: item.name
    });
  });
});
</script>

<style scoped>
.breadwarp {
  margin-left: 20px;
}
</style>