<template>
    <div ref="phoneRef">
        <el-form ref='formRef' :rules='formValid' :model='phoneCode'>
            <el-form-item label="手机号" class="fixmargin" prop="phoneNumber">
                <el-input v-model='phoneCode.phoneNumber'></el-input>
                <el-link type="primary" :underline="false">发送验证码</el-link>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input v-model='phoneCode.code'></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
    import { reactive, ref } from 'vue'
    type FormInstance = InstanceType<typeof ElForm>
    const phoneCode = reactive({
        phoneNumber:'',
        code:''
    })
    const formRef = ref(null);
    const phoneRef = ref()
    const formValid = {
        phoneNumber: [{
            required: true,
            message: "需要填入手机号"
        },
        {
            pattern: /^1[3-9]{2}[0-9]{8}$/,
            message: "请输入正确的电话号码"
        }],
        code:[
            {
                required:true,
                message: "请填入验证码",
                pattern: /^[0-9]{7}$/
            }
        ]
    }
    defineExpose({
        phoneRef,
        phoneCode
    })
</script>
<style scoped>
    .fixmargin {
        margin-bottom: 0px;
    }
</style>