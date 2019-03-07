<template>
  <div class="about container row mt-5">
    <div class="col-4">
      <router-link to="/activity" class="list-group-item list-group-item-action list-group-item-success text-center mb-2">热门活动</router-link>
      <router-link to="/contact" class="list-group-item list-group-item-action list-group-item-danger text-center mb-2">联系我们</router-link>
      <router-link to="/history" class="list-group-item list-group-item-action list-group-item-warning text-center mb-2">历史订单</router-link>
      <router-link to="/delivery" class="list-group-item list-group-item-action list-group-item-info text-center mb-2">快递信息</router-link>
    </div>
    <div class="col-8">
      <router-view></router-view> <!--二级路由-->
    </div>
  </div>
</template>

<script>

  export default {
    name: 'About',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
