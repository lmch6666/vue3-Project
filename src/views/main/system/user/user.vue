<template>
  <div>
    <div class="user">
      <Search
        :formconfig="formconfig"
        :form="form"
        ref="search"
        @receive="receiveParams"
      />
    </div>
    <Content
      :tableData="tableData"
      :tableconfig="tableconfig"
      :count="26"
      ref="content"
    >
      <template #btnposition>
        <el-button type="primary">新增数据</el-button>
        <el-button type="danger">批量删除</el-button>
      </template>
    </Content>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { config } from "../../../../base-ui/form/type";
import { Search, Content } from "../../../../components/index";
// 导入配置文件配置
import { formconfig, tableconfig } from "./user.config";
const store = useStore();

let form = reactive({
  id: "",
  name: "",
  truename: "",
  callphone: "",
  enable: "",
  time: "",
});
const search = ref();
const tableData = ref();
const content = ref();

async function getUserlistDate(pagenum = 1, option: any = {}, limit = 10) {
  let obj: any = {};
  for (const key in option) {
    if (option[key]) {
      if (key == "time" && option[key]) {
        obj["createAt"] = option[key][0];
        obj["updateAt"] = option[key][1];
        continue;
      }
      obj[key] = option[key];
    }
  }
  const result = await store.dispatch("user/getuserlist", {
    _page: pagenum,
    _limit: limit,
    ...obj,
  });
  tableData.value = result;
}

// _page

onBeforeMount(getUserlistDate);

const count = computed(() => {
  return store.getters[`user/getUserlist`];
});

function receiveParams(value: any) {
  console.log(value);
  getUserlistDate(undefined, value);
}
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