import { fetchUserInfo } from '../../api/login'
/** state */
const state = {
  id: null,
  name: null,
  password: null,
  email: null
}

/** mutations */
const mutations = {
  SET_USER (state, user) {
    console.log(user)
    state.id = user.id
    state.name = user.name
    state.email = user.email
  }
}

/** actions */
const actions = {
  FETCH_USER ({ commit }, { id, password }) {
    console.log('id, password', id, password)
    fetchUserInfo(id, password)
      .then(({ data }) => {
        console.log(data)
        commit('SET_USER', data.user)
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
