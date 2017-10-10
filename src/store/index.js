import Vue from 'vue'
import Vuex from 'vuex'
import tartare from './modules/tartare';

Vue.use(Vuex);

const store = new Vuex.Store({
    state(){
      return { count: 0 }
    },
    getters : {
      nbModules( state ){ return Object.keys(state.modules).length },
    },
    actions : {
      addModule( { getters } ){
        store.registerModule( ["modules", getters.nbModules + 1 ] , {
          namespaced : true,
          state : { tata : "pipi" },
          getters : {
            count: ( { tata } )=> tata
          }
        })
      },
      removeAllModule( { state } ){
        for( let moduleName in state.modules )
        {
          store.unregisterModule( ["modules" , moduleName]);
        }
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
    },
    modules : {
        tartare,
        modules : {}
    }
  });

  export default store ;