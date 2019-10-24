import { setToken } from '@/utils/auth'

const user = {
  state: {
    // 存储token
    state: JSON.parse(localStorage.getItem('user') || '{"id": 0, "name": null, "email": null, "avatarUrl": null, "authenticationToken": "", "type": "", "baseType": ""}')
    // state: {
    //   id: 0,
    //   name: undefined,
    //   email: undefined,
    //   avatarUrl: undefined,
    //   authenticationToken: undefined,
    //   type: undefined,
    //   baseType: undefined
    // }
  },
  mutations: {
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
  },
  getters: {
    id: state => {
      return state.id
    },
    name: state => state.name,
    baseType: state => state.baseType,
    email: state => state.email,
    avatarUrl: state => state.avatarUrl,
    authenticationToken: state => state.authenticationToken
  }
}

export default user
