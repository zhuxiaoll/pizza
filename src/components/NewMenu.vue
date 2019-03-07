<template>
  <div class="newmenu">
    <h3 class="text-center text-warning">菜单管理</h3>
    <table class="table text-center">
      <thead>
      <tr>
        <th scope="col">序号</th>
        <th scope="col">品种</th>
        <th scope="col">删除</th>
      </tr>
      </thead>
      <tbody v-for="(item,index) in items" :key="index">
      <tr>
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td><button class="btn btn-danger" @click="delItem(item)">Delete</button></td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: "NewMenu",
    data(){
      return{
        // items:[{name:11},{name:22},{name:33}]
        items:[]
      }
    },
    mounted(){
      var that = this;
      axios.get('./menu-zxl.json')
      .then(res=>{
        // console.log(res.data);
        for(var key in res.data){
          // console.log(key);
          res.data[key].id=key;
          that.items.push(res.data[key])
        }
        // console.log(that.items)
      })

    },
    methods:{
      delItem(item){
        axios.delete('./menu-zxl/'+item.id+'.json')
          .then(res=>{
            console.log('删除成功')
          })
      }

    }
  }
</script>

<style scoped>

</style>
