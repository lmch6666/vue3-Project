<template>
  <div ref="phoneRef">
    <el-form ref="form" :model="phoneCode" :rules="rules">
      <el-form-item label="账号" prop="phone">
        <el-input v-model="phoneCode.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="code">
        <el-input type="password" v-model="phoneCode.code"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import type { ElForm } from "element-plus";
const store = useStore();
const form = ref<InstanceType<typeof ElForm>>();
const phoneCode = reactive({
  phone: "",
  code: "",
});

const phoneRef = ref();

const rules = reactive({
  phone: [
    {
      required: true,
      message: "请填入正确的手机号",
      pattern: /^1[2-9]{2}[0-9]{8}$/,
    },
  ],
  code: [
    {
      required: true,
      message: "请填入正确的验证码",
      pattern: /^[0-9]{6}$/,
    },
  ],
});

// const rules =
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
  // store.dispatch('login/AccountLoginAciton', accountData)
  console.log("chenle12321123");
}

function loginFail() {
  console.log("登陆失败");
}

defineExpose({
  login,
});
</script>
<style scoped>
.fixmargin {
  margin-bottom: 0px;
}

.mar {
  margin-top: 10px;
  margin-left: 200px;
}
</style>