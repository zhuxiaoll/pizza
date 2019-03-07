<template>
  <div class="activity">
    <div class="card col-12" v-for="(item,index) in items" :key="index">
      <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.text}}</p>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name:"Activity",
    data(){
      return{
        items:[
          {
            imgsrc:'../../../static/pizza1.jpg',
            title:'热门活动一',
            text:'电饭锅和你见面染发膏还不能人工环境那么'
          },
          {
            imgsrc:'../../../static/pizza2.jpg',
            title:'热门活动二',
            text:'电饭锅和你见面染发膏还不能人工环境那么'
          },
          {
            imgsrc:'../../../static/pizza3.jpg',
            title:'热门活动三',
            text:'电饭锅和你见面染发膏还不能人工环境那么'
          }
        ]

      }
    }
  }
</script>
<style scoped>

</style>
