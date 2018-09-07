import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    num: 0
}

const mutations = {
    increment(state) {
        state.num ++
    },
    reduce(state) {
        state.num --
    }
}

const getters = {
    // num: function(state){
    //     return state.num += 9
    // }
    // num(state) {
    //     return state.num += 9
    // }
    num: state => state.num +=9
}

const actions = {
    incrementActions({ commit }) {
        // commit('increment')
        setTimeout(() => {
            commit('increment')
        },2000)
    },
    reduceActions({ commit }) {
        commit('reduce')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
