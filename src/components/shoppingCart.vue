<template>
  <div class="cart"> shoppingCart
    <h3>Your Cart</h3>
    <p v-show="!items.length"><i>Please add some product to cart</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">{{product.id}}--{{product.title}}--{{product.price | currency}} x {{product.quantity}}</li>
      <p>total:{{total | currency}}</p>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters  }from 'vuex'
export default {
  computed:{
    ...mapState({
      items:state=>state.cart.items,
      checkoutStatus:state=>state.cart.checkoutStatus,
    }),
    ...mapGetters({
      products:'cartProducts',
      total:'cartTotalPrice'
    })
  },
}
</script>
<style>

</style>
