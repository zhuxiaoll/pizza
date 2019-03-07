<template>
  <div class="history row">
    <div class="card col-4" v-for="(item,index) in items" :key="index">
      <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}*{{item.num}}</h5>
        <p class="card-text">{{item.text}}</p>
        <button @cliock="alert">快递信息</button>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name:"Delivery",
    data(){
      return{
        items:[
          {
            imgsrc:'../../../static/del-yt.jpg',
            num:'3',
            title:'郭富城VB',
            text:'已完成支付'
          },
          {
            imgsrc:'../../../static/del-zt.jpg',
            num:'3',
            title:'郭富城VB',
            text:'已完成支付'
          },
          {
            imgsrc:'../../../static/del-sf.png',
            num:'3',
            title:'郭富城VB',
            text:'已完成支付'
          }
        ]
      }
    },
    methods:{
      alert(){
        alert('都会改变纷纷回归健康估计很难办')
      }
    }
  }
</script>
<style scoped>

</style>
