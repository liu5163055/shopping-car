import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Products from '@/components/Products'
import ShppingCar from '@/components/ShppingCar'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/ShppingCar',
      name: 'ShppingCar',
      component: ShppingCar
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
