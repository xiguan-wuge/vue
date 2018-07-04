<template>
  <div>productList

    <ul>
      <li v-for="(product,index) in products" :key="index">{{product.title}}-{{product.price | currency}}
      <br>
      <!-- 当库存数量不为0时，按钮可以使用 -->
      <button :disabled="!product.inventory" @click="addProductToCart(product)">
        Add to Cart
      </button>
      </li>
      
    </ul>
  </div>
  
  
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      // isdisabled:false,
    }
  },
  // vuex 通过computed 提供数据
  computed:mapState({
    // 读取状态 map
    products:state=>state.products.all
  }),
  created(){
    // dispatch
    this.$store.dispatch('getAllProducts')
  },
  methods:mapActions(['addProductToCart']),
  
}
</script>
<style>

</style>
