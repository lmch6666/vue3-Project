<template>
  <div>
    <div class="user">
      <Search :formconfig="formconfig" :form="form" ref="search" />
    </div>
    <div class="addbtn">
      <el-row justify="end">
        <el-col :span="24">
          <el-button type="primary">新增数据</el-button>
        </el-col>
      </el-row>
    </div>
    <Mtable :tableData="tableData" :tableconfig="tableconfig">
      <template #enable="{ row }">
        <el-tag
          class="ml-2"
          :type="
            row.enable == 1 ? 'success' : row.enable == 2 ? 'danger' : 'warning'
          "
        >
          {{ row.enable == 1 ? "启用" : row.enable == 2 ? "未启用" : "默认" }}
        </el-tag>
      </template>
    </Mtable>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { config } from "../../../../base-ui/form/type";
import Search from "../../../../components/search/search.vue";
import { userlist } from "../../../../service/user/index";
import { Mtable } from "../../../../base-ui/index";
// 导入配置文件配置
import { formconfig, tableconfig } from "./user.config";
const store = useStore();
let form = reactive({
  id: "",
  username: "",
  truename: "",
  phone: "",
  state: "",
  time: "",
});
const search = ref();
const tableData = ref();
// _page
store
  .dispatch("user/getuserlist", {
    _limit: 10,
  })
  .then((item) => {
    tableData.value = item;
  });

setTimeout(() => {
  console.log(search.value.userdata);
}, 0);
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