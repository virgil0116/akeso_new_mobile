import Vue from 'vue'
import Vuex from 'vuex'
import Doctor from './doctor'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Doctor
  }
})

export default store

// export default new Vuex.Store({
//   state: {
//     doctor: '1'
//   }
// })
