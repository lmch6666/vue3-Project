<template>
  <Content
    :tableconfig="tableconfig"
    :tableData="tableData"
    :isshowfooter="false"
    :pagename="'system:menu'"
  >
  </Content>
</template>

<script setup lang="ts">
import { ref, provide, onBeforeMount } from "vue";
import { Content } from "../../../../components/index";
import { tableconfig, tabletreeconfig } from "./menu.config";
import { useStore } from "vuex";
const store = useStore();
const tableData = ref();
function getuserlist() {
  const result = store.state.login.PermissionRouter
  console.log(result);
  tableData.value = result
}

onBeforeMount(getuserlist);

provide("tabletreeconfig", tabletreeconfig);
</script>

<style scoped>
</style>
