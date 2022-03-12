<template>
  <Content :tableconfig="tableconfig" :tableData="tableData" :count="51">
    <template #imgurl="{ row }">
      <el-image
        style="width: 100px; height: 100px"
        :src="row.imgurl"
        :preview-src-list="[row.imgurl]"
        :initial-index="4"
        fit="cover"
      >
      </el-image>
    </template>

    <template #oldprice="{ row }">
      {{ "💴" + row.oldprice }}
    </template>
    <template #newprice="{ row }">
      {{ "💴" + row.newprice }}
    </template>
  </Content>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, reactive } from "vue";
import { Content } from "../../../../components/index";
import { tableconfig } from "./information.config";
import { useStore } from "vuex";
const tableData = ref([]);
const store = useStore();

async function getUserlistDate(pagenum: number = 1, limit = 10) {
  const result = await store.dispatch("product/getgoodslist", {
    _page: pagenum,
    _limit: limit,
  });
  result.forEach((item: any) => {
    let temp = item.status;
    delete item.status;
    item.enable = temp;
  });
  tableData.value = result;
}

onBeforeMount(getUserlistDate);

</script> 
<style>
</style>