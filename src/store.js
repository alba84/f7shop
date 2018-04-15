import Vue from 'vue'

export default {
    state: {
        order: null
    },

    actions: {
        //this.$store.dispatch('init')
        init({commit}){
           console.log('Store.Init'); 
            /*OrderStatusCollection.load(this, function(order_statuses){

                commit('SET_STATUS_COLLECTION', order_statuses)
            })*/
        },
        setCurrentOrder({commit}, order) {
            commit('SET_CURRENT_ORDER', order)
        }
    },
    
    mutations: {
        SET_CURRENT_ORDER(state, order) {
            state.order = order
        }
    },

    getters: {
        order(state) {
            return state.order
        }
    },  
    modules: {}
}