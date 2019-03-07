<template>
  <div class="login">
    <div class="register text-center mt-5 container">
      <img src="../../static/logo.png" width="100" alt="">
      <h3>登录</h3>
      <form>
        <div class="form-group">
          <input type="email" v-model="username" class="form-control" id="input1" aria-describedby="emailHelp" placeholder="请输入您的邮箱">
        </div>
        <div class="form-group">
          <input type="password" v-model="password" class="form-control" id="input2" placeholder="请输入您的密码">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Rember me</label>
        </div>
        <button type="submit" @click.prevent="onSubmit" class="btn btn-primary btn-block">登录</button>
      </form>
    </div>


  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Login',
    data () {
      return {
        username:'',
        password:''
      }
    },
    methods:{
      onSubmit(){
        axios.get('./user-zxl.json')
          .then(res=>{
            console.log(res.data);
            var result=[];
            for(var key in res.data){
              var user = res.data[key];
              result.push(user)
            }
            console.log(result);
            var trueUser = result.filter((user)=>{
              return user.username === this.username && user.password === this.password
            });
             if(trueUser != null && trueUser.length > 0){
              alert('登录成功');
               this.$router.push('/admin')
             }else{
              alert('账号或密码错误')
             }
          })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
