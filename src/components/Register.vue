<template>
  <div class="register text-center mt-5 container">
    <img src="../../static/logo.png" width="100" alt="">
    <h3>注册</h3>
    <form>
      <div class="form-group">
        <input type="email" v-model="username" class="form-control" id="input1" aria-describedby="emailHelp" placeholder="请输入您的邮箱">
      </div>
      <div class="form-group">
        <input type="password" v-model="password" class="form-control" id="input2" placeholder="请输入您的密码">
      </div>
      <div class="form-group">
        <input type="password" v-model="repassword" class="form-control" id="input3" placeholder="请再次输入您的密码">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Rember me</label>
      </div>
      <button type="submit" @click.prevent="onSubmit" class="btn btn-primary btn-block">注册</button>
    </form>
  </div>

</template>
<script>
  //axios引入
  import axios from 'axios';
  export default {
    name:'Register',
    data(){
      return{
        username:'',
        password:'',
        repassword:''
      }
    },
    methods:{
      onSubmit(){ //post一个数据
        //进行当前密码的重复确认
        if(this.password===this.repassword){
          var formData = {
            username:this.username,
            password:this.password
          };
          axios.post('./user-zxl.json',formData)
            .then(res=>{
              console.log('当前数据抛出成功')
              this.$router.push('/login')
            })

        }

      }
    }

  }

</script>
<style scoped>
  .form-control{
    width: 500px;
  }
  .register{
    width: 500px;
    margin:0 auto;
  }
  .btn-block{
    width: 107%;
  }

</style>
