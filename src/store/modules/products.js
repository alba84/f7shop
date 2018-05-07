import client from '../../api/client';
//import Vue from 'vue';

// initial state
const state = {
    filter: {},
    all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
    getAllProducts ({ commit }) {
        /*shop.getProducts(products => {
        commit('setProducts', products)
        })*/
        console.log('getAllProducts');
        client.catalog.test();
        
    }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}