<template>
  <div>
    <Content
      :tableconfig="tableconfig"
      :tableData="list"
      pagename="product:category"
    >
      <template #btnposition>
        <el-button type="primary" v-if="iscreate" @click="createbtn"
          >新增数据</el-button
        >
      </template>
    </Content>
    <Dialog
      ref="dialogRef"
      :user="userinfo"
      :dialogconfig="dialogconfig"
      @senddata="addCategory"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount, computed } from "vue";
import { Content, Search, Dialog } from "../../../../components/index";
import { useStore } from "vuex";
import { tableconfig, dialogconfig } from "./category.config";
import { useOpenDialog } from "../../../../hooks/useOpenDialog";
import { usePermission } from "../../../../hooks/usePermission";
const store = useStore();
const list = ref();
const [dialogRef, treedialogRef, userinfo, edit, createbtn] = useOpenDialog({
  name: "",
  desc: "",
});

const iscreate = usePermission("product:category", "create");
async function getcategorylist() {
  const result = await store.dispatch("category/getlist", {});
  list.value = result;
}

onBeforeMount(getcategorylist);
function addCategory(value: any, isedit: any) {
  if (isedit) {
    store.dispatch("department/modifiy", value);
  } else {
    value.id = Math.ceil(Math.random() * 100000 + 10000).toString();
    store.dispatch("category/add", value);
  }
}

function del(id: any) {
  store.dispatch("category/del", id);
}

defineExpose({
  edit,
  del,
});
</script>

<style>
</style>
