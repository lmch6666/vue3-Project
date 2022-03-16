<template>
  <div>
    <div class="user">
      <Search
        :formconfig="formconfig"
        :form="form"
        @receive="receiveParams"
        :pagename="'system:user'"
      />
    </div>
    <Content
      :tableData="tableData"
      :tableconfig="tableconfig"
      :count="26"
      ref="content"
      :pagename="'system:user'"
      @totaldelete="totaldelete"
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
      :dialogconfig="dialogconfigComputed"
      :user="userinfo"
      @senddata="adduser"
    />
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  onBeforeMount,
  defineExpose,
  provide,
} from "vue";
import { useStore } from "vuex";
import { Search, Content, Dialog } from "../../../../components/index";
import { usePermission } from "../../../../hooks/usePermission";
import { useOpenDialog } from "../../../../hooks/useOpenDialog";
import { Mform } from "../../../../base-ui/index";
import { getDate, filterTime } from "../../../../utils/getDate";

// 导入配置文件配置
import { formconfig, tableconfig, dialogconfig } from "./user.config";
const store = useStore();
//检查页面权限
const iscreate = usePermission("system:user", "create");
const isdel = usePermission("system:user", "delete");

//  使用computed 来收集依赖 当数据有时不及时传递的时候 可以使用 当依赖数据变更时 会自动执行刷新组件
const dialogconfigComputed = computed(() => {
  dialogconfig.formType[0].forEach((item: any) => {
    if (item.mapname == "departmentId") {
      item.selectOption = store.state.departments?.map((i: any) => ({
        label: i.name,
        value: i.id,
      }));
    }
    if (item.mapname == "roleId") {
      item.selectOption = store.state.roles?.map((i: any) => ({
        label: i.name,
        value: i.id,
      }));
    }
  });
  return dialogconfig;
});

const [dialogRef, userinfo, edit, createbtn] = useOpenDialog({
  name: "",
  realname: "",
  callphone: "",
  enable: "",
  departmentId: "",
  roleId: "",
});

let form: any = reactive({
  id: "",
  name: "",
  realname: "",
  callphone: "",
  enable: "",
  time: "",
});

const tableData = ref();

const pageconfig = reactive({
  _page: 1,
  _limit: 10,
});

async function getUserlistDate(pagenum = 1, limit = 10) {
  let obj: any = {};
  obj = filterTime(obj, form);
  pageconfig._page = pagenum;
  pageconfig._limit = limit;
  const result = await store.dispatch("user/getuserlist", {
    ...pageconfig,
    ...obj,
  });
  tableData.value = result;
}

onBeforeMount(getUserlistDate);

function receiveParams(value: any) {
  for (const key in value) {
    form[key] = value[key];
  }
  getUserlistDate();
}

async function del(id: any) {
  await store.dispatch("user/deluser", id);
  getUserlistDate(pageconfig._page, pageconfig._limit);
}

function totaldelete(value: Array<string>) {
  if (Array.isArray(value)) {
    for (const id of value) {
      del(id);
    }
  }
}

function adduser(value: any, isedit: boolean) {
  const result = getDate(value, isedit);
  if (isedit) {
    store.dispatch("user/modifiyuser", result);
  } else {
    result.id = Math.ceil(Math.random() * 100000 + 10000).toString();
    store.dispatch("user/adduser", result);
  }
}

provide("tabletreeconfig", {});

defineExpose({
  edit,
  del,
});
</script>

<style scoped>
.user {
  margin-bottom: 10px;
}
.addbtn {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
}

.textalign {
  text-align: center;
}
</style>
