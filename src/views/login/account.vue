<template>
    <div class='accountwarp' ref="Refdata">
        <el-form ref="form" :model="accountData" :rules="rules">
            <el-form-item label="账号" prop='account'>
                <el-input v-model='accountData.account'></el-input>
            </el-form-item>
            <el-form-item label="密码" prop='password'>
                <el-input v-model='accountData.password'></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
    import { reactive, ref } from 'vue';
    import type { ElForm } from 'element-plus';
    const form = ref(null)
    const Refdata = ref()
    type FormInstance = InstanceType<typeof ElForm>
    const accountData = reactive({
        account: '',
        password: ''
    })
    const rules = reactive({
        account: [
            {
                required:true,
                message:'需要填入账号'
            }
        ],
        password: [
            {
                required:true,
                message:'需要填入密码'
            }
        ]
    })

        function formValidata(ruleForm){
            ruleForm.validate((validate) => {
                if(validate){
                    return true
                } else {
                    return false
                }
        })
    }
        function login() {
            formValidata(form)
        }
            // 自定义组件必须使用defineexpose方法来暴露组件内部的变量和方法
            // defineExpose(login)
        defineExpose({
            Refdata,
            login,
            formValidata
        })
</script>
<style>
    
</style>