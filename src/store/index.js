import Vue from 'vue'
import Vuex from 'vuex'
import Doctor from './doctor'
import user from './user'
import Getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Doctor, user
  },
  Getters
})

export default store

// export default new Vuex.Store({
//   state: {
//     doctor: '1'
//   }
// })
