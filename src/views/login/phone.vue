<template>
  <div class="accountwarp" ref="Refdata">
    <el-form ref="form" :model="data" :rules="rules">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="data.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input type="password" v-model="data.code"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";
import { useStore } from "vuex";
const store = useStore();
const form = ref<InstanceType<typeof ElForm>>();
const Refdata = ref();
const data = reactive({
  phone: "",
  code: "",
});
const rules = reactive({
  phone: [
    {
      required: true,
      message: "需要填入账号",
    },
  ],
  code: [
    {
      required: true,
      message: "需要填入密码",
    },
  ],
});

function formValidata() {
  form.value?.validate((validate) => {
    if (validate) {
      login();
      return true;
    } else {
      loginFail();
      return false;
    }
  });
}
function login() {
  // store.dispatch("login/AccountLoginAciton", data);
  console.log(13213);
}

function loginFail() {
  console.log("登陆失败");
}

// 自定义组件必须使用defineexpose方法来暴露组件内部的变量和方法
// defineExpose(login)
defineExpose({
  formValidata,
  data
});
</script>
<style>
</style>