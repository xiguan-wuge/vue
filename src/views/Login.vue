<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="">
        <input type="text" v-model="email" placeholder="email"/>
      </label>
      <label for="">
        <input type="password" v-model="pass" placeholder="password"/>
      </label>
      <button type="submit">Login</button>
      <!-- login 已完成， 再来login 跳转到首页
    logout 退出 清空token -->

    </form>
  </div>
</template>
<script>
import auth from '@/auth'
export default {
  data(){
    return {
      email:'joe@example.com',
      pass:''
    }
  },
  methods:{
    login(){
      // 验证（email，pass） => auth.login()
      // 失败，成功 localStorage.setItem('token','121212')
      // 1 auth.login 传参 callback
      // 2 this.$router
       
       auth.login(this.email,this.pass,(loggedIn)=>{
         console.log(loggedIn)
         if(loggedIn){
           this.$router.replace(this.$route.query.redirect || '/')
         }
       })
       
    

        
    }
  },
  mounted(){
    console.log(this.$route.query);
  }
}
</script>
<style>

</style>
