import Vue from 'vue'
import Vuex from 'vuex'
import tartare from './modules/tartare';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    modules : {
        tartare,
        modules : {}
    }
  })