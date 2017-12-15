/**
 * Created by Administrator on 2017/12/12.
 */
import * as types from '../types'
const state = {
    iPhone6S: {
      name: 'Apple/苹果 iPhone 6S',
      desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
      price: '5288 - 6888',
      isSelected: true,
      style: {
        '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
        '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
        '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
        '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
      },
      activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
      storage: {
        '16GB': 5288,
        '64GB': 6088,
        '128GB': 6888
      }
    },
    car:[]
}
const actions = {
  // 在这里做逻辑处理包括异步操作
  [types.ACTIONS_ADD_SHOPPINGCAR](context,shopping){
    console.log(shopping)
    let shoppingCar = shopping
    context.commit(types.MUTATIONS_ADD_SHOPPINGCAR,shoppingCar)
  },
  [types.ACTIONS_DEL_SHOPPINGCAR](context,num){
    let count = num
    context.commit(types.MUTATIONS_DEL_SHOPPINGCAR,count)
  }
}
const mutations = {
  //紧紧是数据操作
  [types.MUTATIONS_ADD_SHOPPINGCAR](state,car){
    state.car.push(car)
  },
  [types.MUTATIONS_DEL_SHOPPINGCAR](state,index){
    state.car.splice(index,1)
  }
}

export default {
  state,
  actions,
  mutations
}
