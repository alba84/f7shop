import client from '../../api/client';

// initial state
const state = {
    hit_complete: false,
    hit_limit: 10,
    hit_offset: 0,
    hit_good: []
};

// getters
const getters = {
  hit: state => state.hit_good
};

// actions
const actions = {
    getHit ({ commit }, callback) {
        if(state.hit_complete)
            return;
        
        client.catalog.getList({
            limit: state.hit_limit,
            offset: state.hit_offset
        }, products => {
            commit('setHit', products);
            if(callback && callback instanceof Function)
                callback();
        }, data => {
            console.log(data);
            if(callback && callback instanceof Function)
                callback();
        });
    }
};

// mutations
const mutations = {
    setHit(state, products){
        if(products && products instanceof Array && products.length > 0)
        {
            //Array.prototype.push.apply(state.hit_good, products);
            state.hit_good = state.hit_good.concat(products);
            state.hit_offset += state.hit_limit;
        }
        else
        {
            state.hit_complete = true;
        }
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};