/**
 * Created by Administrator on 2017/12/12.
 */
// 这个文件是将模块组装 并导出store的地方
import Vue from 'vue'
import Vuex from 'vuex'
import shoppingModule from './module/shoppingModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shopping: shoppingModule
  }
})
