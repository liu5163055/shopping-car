<template>
  <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
    <el-menu-item index="/Products">产品罗列</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的个人中心</template>
      <el-menu-item index="/ShppingCar">购物车</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">订单管理</el-menu-item>
  </el-menu>
</template>
<style scoped>

</style>
<script>
  export default{
    name:'nav',
    data () {
      return {
        activeName:"first"
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
