import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)

// Vuex 管理Vue大型项目中的数据，小型项目不要用vuex
// Vue  项目分为两部分：
//   1。Vue，vue-router 页面构建部分，（组件化）
//   2. Vuex 数据流

export default new Vuex.Store({
  modules:{
    products,
    cart
  }
})