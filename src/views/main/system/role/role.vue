<template>
  <div>
    <Search
      :formconfig="formconfig"
      :form="form"
      :pagename="'system:role'"
      @receive="receiveParams"
    />
    <Content
      :tableconfig="tableconfig"
      :tableData="tableData"
      @receive="receiveParams"
      :count="26"
      :pagename="'system:role'"
    >
      <template #btnposition>
        <el-button type="primary" v-if="iscreate" @click="createbtn"
          >新增数据</el-button
        >
        <el-button
          type="danger"
          v-permission="[
            'system:department:delete',
            'system:user:delete',
            'system:menu:delete',
            'system:role:delete',
            'product:category:delete',
            'product:information:delete',
          ]"
          >批量删除</el-button
        >
      </template>
    </Content>

    <Dialog
      ref="dialogRef"
      :dialogconfig="dialogconfig"
      :user="userinfo"
      @senddata="adduser"
    >
      <div class="rolemenu">
        <el-tree
          :props="{ children: 'children', label: 'label' }"
          :data="rolemenulist"
          node-key="id"
          show-checkbox
          @check="handleCheckChange"
          ref="treedialogRef"
        />
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  onBeforeMount,
  provide,
  defineExpose,
  unref,
} from "vue";
import { useStore } from "vuex";
import { formconfig, tableconfig, dialogconfig } from "./role.config";
import { Search, Content, Dialog } from "../../../../components/index";
import { formatmenulist } from "../../../../utils/formatMenuList";
import { filterTime, getDate } from "@/utils/getDate";
import { useOpenDialog } from "@/hooks/useOpenDialog";
import { usePermission } from "@/hooks/usePermission";
const tableData = ref();
const store = useStore();

const iscreate = usePermission("system:role", "create");
const isdel = usePermission("system:role", "delete");

const form: any = reactive({
  name: "",
  intro: "",
  createAt: "",
  updateAt: "",
});

const [dialogRef, treedialogRef, userinfo, edit, createbtn] = useOpenDialog({
  name: "",
  intro: "",
  createAt: "",
  updateAt: "",
});

const pageconfig = reactive({
  _page: 1,
  _limit: 10,
});

const checkedlist = ref([]);

const rolemenulist = computed(() => store.state.rolemenulist);

onBeforeMount(getUserlistDate);

function receiveParams(value: any) {
  for (const key in value) {
    form[key] = value[key];
  }
  getUserlistDate();
}

async function getUserlistDate(pagenum = 1, limit = 10) {
  let obj: any = {};
  obj = filterTime(obj, form);
  pageconfig._page = pagenum;
  pageconfig._limit = limit;
  const result = await store.dispatch("role/getrolelist", {
    _page: pagenum,
    _limit: limit,
  });
  tableData.value = result;
}

function del(id: any) {
  store.dispatch("role/del", id);
}

function adduser(value: any, isedit: boolean) {
  let tree = unref(rolemenulist);
  // console.log(value);
  const result = getDate(value, isedit);
  if (isedit) {
    store.dispatch("role/modifiy", result);
  } else {
    result.id = Math.ceil(Math.random() * 100000 + 10000).toString();
    
    
      const menulist = formatmenulist(tree, checkedlist.value);
      result.menuList = menulist
      store.dispatch("role/add", result);
  }
}

function handleCheckChange(d1: any, d2: any) {
  const { checkedKeys, halfCheckedKeys } = d2;
  const arr:any = [...halfCheckedKeys, ...checkedKeys].sort();
  console.log(arr);
  checkedlist.value = arr
}

provide("tabletreeconfig", {});
defineExpose({
  edit,
  del,
});
</script>

<style scoped>
.rolemenu {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
