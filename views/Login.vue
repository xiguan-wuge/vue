<template>
<div class="login-container">
  <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" label-position="left" ref="loginForm">
    <div class="title-container">
      <h3 class="title">系统登录</h3>
    </div>
    <el-form-item prop="username" label="用户名" >
      <el-input name="username" type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" placeholder="请输入密码" @keyup.native.enter="handleLogin"></el-input>
      <el-button type="primary" :loading="isloading" style="width:100%;margin-bottom:30px" @click.native.prevent="handleLogin">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
//使用解构  返回对象{}
import {isvalidUsername}from '@/utils/validate'
export default {
  
  data(){
    const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)){
            callback(new Error('请输入正确的用户名'))
        } else {
            callback();
        }
    }
    const validatePassword = (rule, value, callback) => {
        if(value.length < 6){
            callback(new Error('密码至少6位'));
        } else {
            callback();
        }
    }

    return{
      loginForm:{
        username:'',
        password:''
      },
      loginRules:{
        username:[{
          require:true, //必填
          trigger:'blur',// 触发方式 (blur:离开)
          validator:validateUsername //验证规则
        }],
        password:[{
          require:true,
          trigger:'blur',
          validator:validatePassword
        }]
      },
      isloading:false,
    }
  },
  methods:{
    handleLogin(){
      // 要做什么？要验证数据
      // $refs找到要的组件
      this.$refs.loginForm.validate(valid=>{
        if(valid){
          console.log('提交');
          this.isloading=true;
          setTimeout(()=>{
            this.isloading=false;
          },2000)
        }else{
          console.log('error submit');
          return false;
        }
        
    
      })
    }
  }
}  
</script>
<style>

</style>
