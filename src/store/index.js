import Vue from 'vue'
import Vuex from 'vuex'
import Doctor from './doctor'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Doctor, user
  }
})

export default store

// export default new Vuex.Store({
//   state: {
//     doctor: '1'
//   }
// })
