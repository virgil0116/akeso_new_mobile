import { setToken } from '@/utils/auth'

const user = {
  state: {
    // 存储token
    state: JSON.parse(localStorage.getItem('user') || '{"id": 0, "name": null, "email": null, "avatarUrl": null, "authenticationToken": "", "type": "", "baseType": ""}'),
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, data) => {
      console.log('updateUserInfo data => ', data)
      localStorage.setItem('user', JSON.stringify(data))
      setToken(data.authenticationToken)
      state.id = data.id
      state.name = data.name
      state.email = data.email
      state.avatarUrl = data.avatarUrl
      state.authenticationToken = data.authenticationToken
      state.type = data.type
      state.baseType = data.baseType
    },
    CLEAR_USER_INFO: (state) => {
      localStorage.clear()
      state.id = ''
      state.name = ''
      state.email = ''
      state.avatarUrl = ''
      state.authenticationToken = ''
      state.type = ''
      state.baseType = ''
    },
    updateUserInfo: (state, data) => {
      console.log('updateUserInfo data => ', data)
      localStorage.setItem('user', JSON.stringify(data))
      setToken(data.authenticationToken)
      state.id = data.id
      state.name = data.name
      state.email = data.email
      state.avatarUrl = data.avatarUrl
      state.authenticationToken = data.authenticationToken
      state.type = data.type
      state.baseType = data.baseType
    }
  },
  action: {
    updateUserInfo({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_USER_INFO', data)
      })
    }
  }
}

export default user
