<template>
  <div class="Pizza">
    <form>
      <h3 class="text-center text-warning">添加新的Pizza</h3>
      <div class="form-group">
        <label for="Input1">
          <h5 class="text-warning">品种</h5>
        </label>
        <input  type="text" class="form-control" v-model="newPizza.name" id="Input1" placeholder="请输入您的pizza种类" >
      </div>
      <div class="form-group">
          <h5 class="text-warning">商品描述</h5>
        <textarea  class="form-control" v-model="newPizza.text" id="Textarea1" rows="3" placeholder="请写下这款pizza有什么特点..."></textarea>
      </div>
      <label for="Select1">
        <h4 class="text-warning">尺寸 & 价格</h4>
      </label>
      <div>
        <div class="form-group zxl1">
          <p class="spans">尺寸：</p>
          <select class="form-control col-3" v-model="newPizza.size1" id="Select1">
            <option value="7">5</option>
            <option value="9">7</option>
            <option value="10">9</option>
            <option value="12">11</option>
            <option value="14">14</option>
          </select>
          <p class="spans">价格 :</p>
          <input  type="text" class="form-control col-4" v-model="newPizza.price1" id="Input2" >
        </div>
        <div class="form-group zxl2">
          <p class="spans">尺寸：</p>
          <select  class="form-control col-3 " v-model="newPizza.size2" id="Select2">
            <option value="7">5</option>
            <option value="9">7</option>
            <option value="10">9</option>
            <option value="12">11</option>
            <option value="14">14</option>
          </select>
          <p class="spans">价格 :</p>
          <input  type="text" class="form-control col-4" v-model="newPizza.price2" id="Input3" >
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-lg btn-block mt-5" @click.prevent="addPizza">添加Pizza</button>
    </form>


  </div>

</template>

<script>
  import axios from 'axios'
    export default {
        name: "Pizza",
      data(){
          return{
            newPizza:{}
          }
      },
      methods:{
          addPizza(){
            var data = {
              name:this.newPizza.name,
              text:this.newPizza.text,
              options:[
                {
                  size:this.newPizza.size1,
                  price:this.newPizza.price1
                },
                {
                  size:this.newPizza.size2,
                  price:this.newPizza.price2
                },
              ]
            };
            axios.post('./menu-zxl.json',data)
              .then(res=>{
                console.log(res.data)
              });
            // console.log(this.newPizza)

          }

      }
    }
</script>

<style scoped>
  .zxl1{
    float:left;
    width: 300px;
  }
  .zxl2{
    float:left;
    width: 300px;
  }
</style>
