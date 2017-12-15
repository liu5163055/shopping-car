<template>
    <div>
      <el-container>
        <el-header></el-header>
        <el-main>
          <div id="table-div" v-if="shpping.length">
            <el-table :data="shpping"  border >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="storage" label="型号"></el-table-column>
              <el-table-column prop="color" label="颜色" ></el-table-column>
              <el-table-column prop="price" label="单价"></el-table-column>
              <el-table-column label="数量">
                <template slot-scope="scope">
                  <el-input-number size="mini" :min="1" :max="10" label="描述文字"></el-input-number>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="delCaritem(scope.$index, shpping)" size="mini" type="primary" icon="el-icon-delete">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div id="car-price">
              <i class="el-icon-sold-out"></i>
              <i>总计 : </i>
              <span>{{num}}</span>
            </div>
          </div>
          <div class="cart-empty" v-else>
            <div id="content"><span class="pomegranage"><strong>购物车空空如也</strong></span></div>
          </div>
        </el-main>
      </el-container>
    </div>
</template>
<style >
  .shopItem{
    width: 80%;
    padding: 30px;
    border: 1px solid red;
  }
  .shopItem>div{
    padding: 30px;
    border: 1px solid #2d26ff;
    display: inline-block;
  }
  .el-table th>.cell{
    text-align: center;
  }
  .el-table{
    margin:auto;
  }
  #car-price{
    display: inline-block;
    padding:20px 0;
    text-align: right;
    float: right;
    margin-right: 8%;
  }
  #table-div{
    width: 70%;
    margin:auto;
  }
</style>
<script>
  import * as types from '../store/types'
  export default{
    data () {
      return {
        shpping:[],
        num:0
      }
    },
    methods:{
      delCaritem(index, rows){
        this.$store.dispatch(types.ACTIONS_DEL_SHOPPINGCAR,index)
      }
    },
    components: {},
    beforeCreate(){
    },
    mounted(){
      this.shpping = this.$store.state.shopping.car
    },
    destroyed(){
      console.log("销毁")
    }
  }
</script>
