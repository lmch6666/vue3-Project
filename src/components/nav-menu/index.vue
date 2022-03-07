<template>
  <div class="nav-menu">
    <div class="logo">
      <!-- <img src="" alt=""> -->
      <span class="title" v-if="!collapse">CMS</span>
    </div>
    <el-menu
      :default-active="jumpPath"
      class="el-menu-vertical"
      :collapse="collapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in routerList" :key="item.id">
        <template v-if="item.type == 1">
          <template v-if="item.children">
            <el-sub-menu :index="item.url">
              <template #title>
                <component :is="iconlist[item.icon]" />
                <!-- <component :is=" defineAsyncComponent (() => import(`./${item.icon}.vue`))"/> -->
                <span>{{ item.name }}</span>
              </template>
              <template v-for="t in item.children" :key="t.id">
                <el-menu-item :index="t.url" @click="handleclick">{{
                  t.name
                }}</el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.name" @click="handleclick">{{
              item.name
            }}</el-menu-item>
          </template>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
// 动态导入组件1. 使用异步组件函数来import导入 组件  , 或者使用对象来查询
import { computed, defineAsyncComponent, defineProps, ref } from "vue";
import { useStore } from "../../store/index";
import Shop from "./shop.vue";
import Setting from "./setting.vue";
import Management from "./management.vue";
import { useRouter } from "vue-router";

const props = defineProps({
  collapse: Boolean
});
const store = useStore();
const router = useRouter();
const list = store.state.login.router;
const jumpPath = ref('/main/analysis/dashboard')

jumpPath.value = router.currentRoute.value.fullPath


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const iconlist = {
  Shop: Shop,
  Setting: Setting,
  Management: Management,
};

const routerList = computed(() => {
  return list;
});

function handleclick(key: any) {
  router.push({
    path: key.index ?? '/not-found'
  });
}
</script>

<style scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 20px;
  text-align: center;
  color: white;
  font-weight: 700;
}

.el-menu {
  border-right: none;
}

.el-sub-menu {
  background-color: #001529 !important;
}

.el-sub-menu:hover >>> .el-sub-menu__title {
  color: #409eff !important;
}

.el-menu-item {
  padding-left: 30px !important;
  background-color: #0c2135 !important;
  color: aliceblue;
}

.el-menu-item.is-active {
  color: #409eff !important;
  background-color: white !important;
}

.el-sub-menu >>> .el-sub-menu__title {
  color: aliceblue !important;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
}
</style>

