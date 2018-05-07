//import shop from '../../api/shop'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus(state) {
      return state.checkoutStatus;
  },

  cartProducts(state, getters, rootState) {
    return state.added.map(function({ id, quantity }){
      const product = rootState.products.all.find(function(product){ return product.id === id; })
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    });
  },

  cartTotalPrice(state, getters){
    return getters.cartProducts.reduce(function(total, product){
      return total + product.price * product.quantity;
    }, 0);
  }
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  }
}

// mutations
const mutations = {
  pushProductToCart (state, { id }) {
    state.added.push({
      id,
      quantity: 1
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}