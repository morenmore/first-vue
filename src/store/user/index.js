import axios from 'axios'
import { fetchUserInfo } from '../../api/login'
/** state */
const state = {
  id: null,
  name: null,
  password: null,
  email: null,
  token: null
}

/** mutations */
const mutations = {
  SET_USER (state, { user, token }) {
    state.id = user.id
    state.name = user.name
    state.email = user.email
    state.token = token
    localStorage.setItem('name', user.name)
    localStorage.setItem('token', token)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }
}

/** actions */
const actions = {
  FETCH_USER ({ commit }, { id, password }) {
    console.log('id, password', id, password)
    fetchUserInfo(id, password)
      .then(({ data }) => {
        console.log('data >>>', data)
        commit('SET_USER', data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

/** getters */
const getters = {
  getMsg (state) {
    // return `${state.message} => Length : ${state.message.length}`;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
