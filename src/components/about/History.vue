<template>
  <div class="history row">
    <div class="card col-4" v-for="(item,index) in items" :key="index">
      <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}*{{item.num}}</h5>
        <p class="card-text">{{item.text}}</p>
        <button @cliock="alert">支付</button>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name:"History",
    data(){
      return{
        items:[
          {
            imgsrc:'../../../static/pizza1.jpg',
            num:'3',
            title:'郭富城VB',
            text:'已完成支付'
          },
          {
            imgsrc:'../../../static/pizza2.jpg',
            num:'3',
            title:'郭富城VB',
            text:'已完成支付'
          },
          {
            imgsrc:'../../../static/pizza3.jpg',
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
