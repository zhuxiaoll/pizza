<template>
  <!-- 左菜单展示 -->
  <div class="menu container row">
    <div class="col-7">
      <h3 class="text-center text-primary">点餐</h3>
      <table class="table text-center">
        <thead class="bg-primary text-white ">
        <tr>
          <th scope="col">尺寸</th>
          <th scope="col">价格(元)</th>
          <th scope="col">加入</th>
        </tr>
        </thead>
        <tbody v-for="(item,index) in items" :key="index">
        <tr>
          <td colspan="3">{{item.name}}</td>
        </tr>
        <tr>
          <td colspan="3">{{item.text}}</td>
        </tr>
        <tr v-for="(item1,index1) in item.options" :key="index1">
          <td>{{item1.size}}</td>
          <td>{{item1.price}}</td>
          <td><button class="btn btn-success" @click="addToBasket(item,item1)">+</button></td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- 右购物车 -->
    <div class="col-5 text-center">
      <!-- 商品的数量 + 种类 +价格  -->
      <h3 class="text-primary">购物车</h3>
      <table class="table text-center">
        <thead class="bg-primary text-white ">
        <tr>
          <th scope="col">数量</th>
          <th scope="col">种类</th>
          <th scope="col">价格</th>
        </tr>
        </thead>
        <!--<template v-if="newItems.length>0">-->
          <tbody v-for="(item,index) in newItems" :key="index">
          <tr>
            <td>
              <button class="btn btn-primary" @click="reduce(item,index)">-</button>
              <input class="input" type="number" v-model.number="item.num">
              <button class="btn btn-primary" @click="add(item)" >+</button>
            </td>
            <td>{{item.name}}-{{item.size}}</td>
            <td>{{item.price*item.num}}</td>
          </tr>
          </tbody>
          <!-- 计算总数+总价 -->
          <tr>
            <td></td>
            <td colspan="2" class="text-info">商品总件数：<span class="strong">{{totalNum}}</span></td>
          </tr>
          <tr>
            <td></td>
            <td colspan="2" class="text-info">商品总价格：<span class="strong">{{totalPrice}}</span></td>
          </tr>
        <!--</template>-->
        <!--<template v-else>-->
          <!--<tr>-->
            <!--<td colspan="3"><h3 class="text-danger ">此购物车空空如也~</h3></td>-->
          <!--</tr>-->
        <!--</template>-->
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Menu',
    data () {
      return {
        // items:{},

        items:{
            0:{
              name:'芝士pizza',
              text:'这是一款被大众喜爱的pizza.',
              options:[
                {
                  size:'7寸',
                  price:'70'
                },
                {
                  size:'10寸',
                  price:'100'
                },
              ]
            },
            1:{
              name:'榴莲pizza',
              text:'这是一款口味独特的pizza,依据客人口味自行购买.',
              options:[
                {
                  size:'7寸',
                  price:'90'
                },
                {
                  size:'10寸',
                  price:'140'
                },
              ]
            }
          },

        // 表示当我在左边菜单栏添加数据，newItems才有值。
        newItems:[
          // name:榴莲,
          // size:7,
          // num:1,
          // price:80
        ]
      }
    },
    methods:{
      addToBasket(item,item1){
        var result = this.newItems.filter((item2)=>{
          return item.name == item2.name && item1.size == item2.size

        });
        // console.log(result)
        if(result != null && result.length>0){
          if(result[0].num>=10){
            result[0].num=10
          }else{
            result[0].num++
          }
        }else{
          this.newItems.push({
            name:item.name,
            size:item1.size,
            num:1,
            price:item1.price
          })
        }

      },
      reduce(item,index){
        if(item.num>1){
          item.num--
        }else{
          this.newItems.splice(index,1)
        }
      },
      add(item){
        if(item.num>=10){
          item.num=10
        }else{
          item.num++
        }
      }
    },
    computed:{
      totalNum(){
        return this.newItems.length
      },
      totalPrice(){
        return this.newItems.reduce((pre,cur)=>{
          return pre+cur.num*cur.price
        },0)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input{width: 50px;text-align: center;}
  .btn{width: 30px;height: 30px;padding: 0;}
  .strong{font-weight: bolder;}
</style>
