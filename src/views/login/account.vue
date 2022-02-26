<template>
    <div class='accountwarp' ref="Refdata">
        <el-form ref="form" :model="accountData" :rules="rules">
            <el-form-item label="账号" prop='account'>
                <el-input v-model='accountData.account'></el-input>
            </el-form-item>
            <el-form-item label="密码" prop='password'>
                <el-input type="password" v-model='accountData.password'></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
    import { reactive, ref } from 'vue';
    import type { ElForm } from 'element-plus';
    import {useStore} from 'vuex'
    const store = useStore()
    const form = ref<InstanceType<typeof ElForm>>();
    const Refdata = ref()
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

    function formValidata(){
        form.value?.validate((validate) => {
            if(validate){
                login()
                return true
            } else {
                loginFail()
                return false
            }
        })
    }
        function login() {
            store.dispatch('login/AccountLoginAciton', accountData)
        }

        function  loginFail(){
            console.log('登陆失败');
        }
        
            // 自定义组件必须使用defineexpose方法来暴露组件内部的变量和方法
            // defineExpose(login)
        defineExpose({
            formValidata,
            accountData
        })
</script>
<style>
    
</style>