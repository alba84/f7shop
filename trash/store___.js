"use strict";

import Vue from 'vue'

import User from './class/user'

export default {
    state: {
        user: null,
        order: null
    },

    actions: {
        //this.$store.dispatch('init')
        init({commit}){
            let user = new User(this);
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