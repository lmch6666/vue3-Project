<template>
  <div>
    <Search :formconfig="formconfig" :pagename="'system:role'"/>
    <Content
      :tableconfig="tableconfig"
      :tableData="tableData"
      @receive="receiveParams"
      :count="26"
      :pagename="'system:role'"
    >
      <template #btnposition>
        <el-button type="danger" v-permission="['system:department:delete','system:user:delete','system:menu:delete', 'system:role:delete','product:category:delete', 'product:information:delete']">批量删除</el-button>
      </template>
    </Content>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { formconfig, tableconfig } from "./role.config";
import {Search,Content} from "../../../../components/index";
const tableData = ref();
const store = useStore();

onBeforeMount(getUserlistDate);

function receiveParams(params: any) {}

async function getUserlistDate(pagenum = 1,option: any = {}, limit=  10) {
  const result = await store.dispatch("role/getrolelist", {
    _page: pagenum,
    _limit: limit,
  });
  tableData.value = result;
}
</script>

<style>
</style>
