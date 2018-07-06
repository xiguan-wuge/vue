<template>
  <div>
    <ul>
      <li v-for="(product,index) in products" :key="index">{{product.title}}--{{product.price | currency }}
        <br>
        <button :disabled="!product.inventory" @click="addProductToCart(product)"> Add to Cart</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState,mapActions} from 'vuex'
export default {
  computed:mapState({
    products:state=>state.products.all
  }),
  created(){
    this.$store.dispatch('getAllProducts')
  },
  methods:mapActions(['addProductToCart']),
}
</script>
<style>

</style>
