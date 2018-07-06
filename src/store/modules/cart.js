
// items是购物车里面的东西
const state = {
  items: [],
  checkoutStatus: null
}

// 对 state 的计算或处理

// 在模块之间可以共享数据 vuex store 一棵树 树根(rootState) products.all
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id);
      // let Total = 
      return {
        id: product.id,
        title: product.title,
        quantity,
        price: product.price
      }
    })

  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  }

}
const actions = {
  addProductToCart({ state, commit }, product) {
    // console.log(product);
    // 是否已经在购物车中？
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit("pushProductToCart", { id: product.id });
        // 需要什么就存取什么，不用把所有的都保存下来，同时解构很有用,尤其注意传递的是对象的时候，即使对象里只有一个属性，取出来也要使用解构
      } else {
        commit("incrementItemQuantity", cartItem);
      }
      commit("decrementProductInventory", { id: product.id });
    }
  }
};
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
