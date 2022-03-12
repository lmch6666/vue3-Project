<template>
  <Content
    :tableconfig="tableconfig"
    :tableData="tableData"
    :isshowfooter="false"
  >
  </Content>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { Content } from "../../../../components/index";
import { tableconfig, tabletreeconfig } from "./menu.config";
import { useStore } from "vuex";
import { getLocalStorage } from "../../../../utils/cache";
const store = useStore();
const tableData = ref()
const id = parseInt(JSON.parse(getLocalStorage("id")));

async function getuserlist(params: any) {
  const result = await store.dispatch("menu/getmenulist", id)
  tableData.value = result
}

provide("tabletreeconfig", tabletreeconfig);
</script>

<style scoped>
</style>