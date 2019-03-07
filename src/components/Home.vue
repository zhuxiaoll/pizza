<template>
  <div class="home text-center">
    <div class="box">
      <div class="bg">
        <h1>欢迎来品尝pizza!</h1>
        <h2>这里有各种各样的好吃的pizza。</h2>
        <button class="btn btn-primary btn1">Let's Order.</button>
      </div>
    </div>
    <h3>历史订单</h3>
    <history></history>



  </div>
</template>

<script>
  import History from '@/components/about/History'
export default {
  name: 'Home',
  data () {
    return {
      msg: '主页面'
    }
  },
  methods:{

  },
  components:{
    'history':History
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    background: url('../assets/pizza.jpg');
    width:100%;
    height:700px;
    padding: 10%;

  }
  .bg{
    background: #bbb;
    opacity: .8;
    width: 600px;
    height: 200px;
    margin: 150px auto;
    padding: 20px;
    position: relative;
  }
  .btn1{
    position:absolute;
    left: 250px;
    top: 132px;
  }
</style>
