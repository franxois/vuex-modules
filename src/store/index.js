import Vue from 'vue'
import Vuex from 'vuex'
import tartare from './modules/tartare';

Vue.use(Vuex);

const raclette = {
  state() {
    return {
      lardons: 5
    }
  },
  namespaced: true
}

const fondue = {
  state() {
    return {
      fromages: 8
    }
  },
  namespaced: true
}

const param = {
  state() {
    return {
      index: 0
    }
  },
  modules: {
    tartare,
    raclette,
    fondue
  },
  namespaced: true,
}

const store = new Vuex.Store({
  state() {
    return { count: 0 }
  },
  getters: {
    nbParams(state) {
      return Object.keys(state.params).length
    },
    params(state) {
      return (idx) => state.params[idx];
    },
  },
  actions: {
    addModule(context) {

      //tartare.commit('change', "Gaston");
      context.commit('tartare/change', 'Gaston ' + new Date().getTime());

      let p = param;

      store.registerModule(
        ["params", this.getters.nbParams],
        p)
    },
    removeAllModule({ state }) {
      for (let moduleName in state.params) {
        store.unregisterModule(["params", moduleName]);
      }
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  modules: {
    tartare,
    params: {
      namespaced: true,
    },
  }
});

export default store;