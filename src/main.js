// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

for( let i = 0 ; i < 10 ; i++ ){
  store.registerModule( ["modules",i] , {
    namespaced : true,
    state : { tata : "pipi" },
    getters : {
      count: ( { tata } )=> tata
    }
  })
}


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
})
