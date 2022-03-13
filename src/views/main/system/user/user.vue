<template>
  <div>
    <div class="user">
      <Search
        :formconfig="formconfig"
        :form="form"
        ref="search"
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
        <el-button
          type="primary"
          v-if="iscreate"
          @click="addData()"
          >新增数据</el-button>
        <el-button type="danger" v-if="isdel">批量删除</el-button>
      </template>
    </Content>
    <Dialog
      v-model="centerDialogVisible"
      :dialogconfig="dialogconfig"
      :userdata="userdata"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onBeforeMount, defineExpose } from "vue";
import { useStore } from "vuex";
import { Search, Content, Dialog } from "../../../../components/index";
import { usePermission } from "../../../../hooks/usePermission";
import { Mform } from "../../../../base-ui/index";
// 导入配置文件配置
import { formconfig, tableconfig, dialogconfig } from "./user.config";
const store = useStore();
const centerDialogVisible = ref(false);
let form: any = reactive({
  id: "",
  name: "",
  realname: "",
  callphone: "",
  enable: "",
  time: "",
});

let userdata:any = reactive({
  name: "",
  realname: "",
  callphone: "",
  enable: "",
  departmentId: "",
  role: "",
});

const search = ref();

const tableData = ref();

const content = ref();

const deldata = ref();

const pageconfig = reactive({
  _page: 1,
  _limit: 10,
});

const iscreate = usePermission("system:user", "create");

const isdel = usePermission("system:user", "delete");

async function getUserlistDate(pagenum = 1, limit = 10) {
  let obj: any = {};
  for (const key in form) {
    if (form[key]) {
      if (key == "time" && form[key]) {
        obj["createAt"] = form[key][0];
        obj["updateAt"] = form[key][1];
        continue;
      }
      obj[key] = form[key];
    }
  }
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

function edit(value: any) {
  centerDialogVisible.value = true
  for (const key in userdata) {
      userdata[key] = value[key]
  }
  console.log(value);
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

function addData() {
  centerDialogVisible.value = true
}

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
