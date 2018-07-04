import shop from "../../api/shopping";

// store 里的一间库房 modules
// 搬运 actions 动作，
// state 状态数据，
// getters 获取状态的get方法
// mutaition 改变-》会计 记账

const state = {
  all: []
};
const getters = {};
const actions = {
  // commit API
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      // console.log(products);
      commit("setProducts", products);
    });
  }
};
//修改state
const mutations = {
  //第一个参数固定为state ，其余为要改的state具体数据
  setProducts(state, products) {
    state.all = products;
  },
  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.inventory--;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
