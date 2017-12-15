<template>
  <div id="myitem">
    <div class="products_item" v-for="item in commodity">
      <router-link to="/Detail"><img src="../assets/logo.png" alt=""></router-link>
      <div>
        <span class="commodity">{{item.name}}</span>
        <span class="shppingCar_icon">加入购物车</span>
      </div>
    </div>
  </div>

</template>
<script>
  export default{
    data () {
      return {
        commodity:[
          {id:1,name:'1号商品描素'},
          {id:2,name:'2号商品描素'},
          {id:3,name:'3号商品描素'},
          {id:4,name:'4号商品描素'},
          {id:5,name:'5号商品描素'},
          {id:6,name:'6号商品描素'},
          {id:7,name:'7号商品描素'},
          {id:8,name:'8号商品描素'}
          ]
      }
    },
    components: {}
  }
</script>
<style>
  .products_item{
    border:1px solid red;
    display: inline-block;
    text-align: center;
    width: 25%;
    margin: 20px 30px;
  }
  #myitem{
    margin: auto;
  }
  .commodity{
    color: red;
    display: inline-block;
    margin: 20px;
  }
  .shppingCar_icon{
    color: pink;
    display: inline-block;
    margin: 20px;
  }
</style>
