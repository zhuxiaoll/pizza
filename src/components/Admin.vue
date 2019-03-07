<template>
  <div class="admin container row">
    <div class="col-7">
      <Pizza></Pizza>
    </div>
    <div class="col-5">
      <NewMenu></NewMenu>
    </div>
  </div>
</template>

<script>
  import Pizza from '@/components/Pizza.vue'
  import NewMenu from '@/components/NewMenu'
  export default {
    name: 'Admin',
    data () {
      return {

      }
    },
    components:{
      'Pizza':Pizza,
      NewMenu
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
