<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="200px">
        <navMenu />
      </el-aside>
      <el-container class="content">
        <el-header class="content-header">
          <navHeader @changeIcon="changeIcon"/> 
        </el-header>
        <el-main class="content-body">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import { h, ref } from "vue";
import { ElMessage } from "element-plus";
import navMenu from '../../components/nav-menu/index.vue'
import navHeader from '../../components/nav-header/index.vue'
const open = () => {
  ElMessage("this is a message.");
};
const iscol = ref<boolean>(false)
const openVn = () => {
  ElMessage({
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};

function changeIcon(value:any) {
  
}
</script>

<style scoped>
  .main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .main-container, .content {
    height: 100%;
  }

  .content-header {
    height: calc(100% - 48px);
  }

  .el-header,
  .el-footer {
    display: flex;
    text-align: center;
    align-items: center;
    color: cornflowerblue;
  }


  .el-header {
    height: 48px !important;
  }

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    background-color: #001529;
    transition: width .3s linear;
  }

  .el-aside::-webkit-scrollbar {
    display: none;
  }

  .el-main {
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
  }

</style>