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
  }
}

/** actions */
const actions = {
  FETCH_USER ({ commit }, { id, password }) {
    console.log('id, password', id, password)
    fetchUserInfo(id, password)
      .then(({ data }) => {
        console.log(data)
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
