<template>
  <div>
    <Content
      :tableData="tableData"
      :tableconfig="tableconfig"
      pagename="system:department"
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
      :dialogconfig="computedConfig"
      @senddata="addDepart"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineExpose, provide } from "vue";
import { Content, Dialog } from "../../../../components/index";
import { tableconfig, dialogconfig } from "./department.config";
import { useStore } from "vuex";
import { useOpenDialog } from "../../../../hooks/useOpenDialog";
import { usePermission } from "../../../../hooks/usePermission";
import { getDate } from "@/utils/getDate";
const store = useStore();
const tableData = computed(() => store.state.departments);
const [dialogRef, treedialogRef, userinfo, edit, createbtn] = useOpenDialog({
  id: "",
  name: "",
});

const iscreate = usePermission("system:department", "create");

const computedConfig = computed(() => {
  dialogconfig.formType[0].forEach((item: any) => {
    if (item.label == "部门名") {
      item.selectOption = store.state.departments.map((i: any) => {
        return {
          label: i.name,
          value: i.name,
        };
      });
    }
  });
  return dialogconfig;
});

function del(id: string) {
  store.dispatch("department/delDepart", id);
}

function addDepart(value: any, isedit: boolean) {
  const result = getDate(value, isedit);
  if (isedit) {
    store.dispatch("department/modifiyDepart", result);
  } else {
    result.id = Math.ceil(Math.random() * 100000 + 10000).toString();
    store.dispatch("department/addDepart", result);
  }
}

provide("tabletreeconfig", {});
defineExpose({
  edit,
  del,
});
</script>

<style>
</style>
