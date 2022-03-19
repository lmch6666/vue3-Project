<template>
  <Content
    :tableconfig="tableconfig"
    :tableData="tableData"
    :count="51"
    :pagename="'product:information'"
  >
    <template #btnposition>
      <el-button type="primary" v-if="iscreate" @click="createbtn"
        >新增数据</el-button
      >
    </template>
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
  <Dialog
    ref="dialogRef"
    :dialogconfig="dialogconfig"
    :user="userinfo"
    @senddata="addgoods"
  />
</template>

<script setup lang="ts">
import { ref, onBeforeMount, reactive } from "vue";
import { Content, Dialog } from "../../../../components/index";
import { tableconfig, dialogconfig } from "./information.config";
import { useStore } from "vuex";
import { useOpenDialog } from "../../../../hooks/useOpenDialog";
import { getDate } from "@/utils/getDate";
import { usePermission } from "@/hooks/usePermission";

const tableData = ref([]);
const store = useStore();
const [dialogRef, treedialogRef, userinfo, edit, createbtn] = useOpenDialog({
  name: "",
  imgurl: "",
  oldprice: "",
  newprice: "",
  enableL: "",
});

const iscreate = usePermission("system:role", "create");

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

function del(value: any) {
  store.dispatch("product/delgoods", value);
}

function addgoods(value: any, isedit: any) {
  const result = getDate(value, isedit);
  if (isedit) {
    store.dispatch("product/modifiygood", result);
  } else {
    result.id = Math.ceil(Math.random() * 100000 + 10000).toString();
    store.dispatch("product/addgood", result);
  }
}

defineExpose({
  edit,
  del,
});
</script> 
<style>
</style>
