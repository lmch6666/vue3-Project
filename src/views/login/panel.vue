<template>
  <div class="warp">
    <h3 class="title">CMS</h3>
    <div class="window">
      <el-tabs type="border-card" stretch @tab-click="changeName">
        <el-tab-pane label="account" class="tab">
          <template #label>
            <span>账号登陆</span>
          </template>
          <Account ref="account" />
        </el-tab-pane>
        <el-tab-pane label="phone" class="tab">
          <template #label>
            <span>手机号登陆</span>
          </template>
          <Phone ref="phone" />
        </el-tab-pane>
      </el-tabs>
      <div class="function">
        <el-checkbox v-model="isRemember" label="Option 1" size="small"
          >记住密码</el-checkbox
        >
        <el-link type="primary" :underline="false" class="fontsize"
          >注册账号</el-link
        >
      </div>
      <el-button type="primary" @click="submit" class="btn">登陆</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
import Account from "./account.vue";
import Phone from "./phone.vue";
import { setLocalStorage, removeLocalStorage } from "../../utils/cache";
import { ElForm } from "element-plus";

let instance = getCurrentInstance();
let isRemember = ref(false);
let tabName = ref("account");
let account:any = ref<InstanceType<typeof Account>>();
let phone:any = ref<InstanceType<typeof Phone>>();
const submit = () => {
  if (tabName.value == "account") {
    account.value?.formValidata();
    if (isRemember.value) {
      setLocalStorage("xxx1", account?.value?.accountData.account);
      setLocalStorage("xxx2", account?.value?.accountData.password);
    } else {
      removeLocalStorage(account.value.accountData.account);
    }
  } else if (tabName.value == "phone") {
    phone?.value?.formValidata();
  }
};

function changeName(element: any) {
  let name = element.props.label;
  if (name == "account") {
    tabName.value = "account";
  } else if (name == "phone") {
    tabName.value = "phone";
  } else {
    return;
  }
}
</script>
<style scoped>
.warp {
  width: 320px;
  height: 280px;
}

.fontsize {
  font-size: 12px;
}

.tab {
  height: 114px;
}

.function {
  display: flex;
  justify-content: space-between;
  margin: 5px 5px;
}
.btn {
  width: 100%;
}
</style>
