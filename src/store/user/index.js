/** state */
const state = {
  id: null,
  name: null,
  email: null
}

/** mutations */
const mutations = {
  setUser (state, user) {
    // state.id = user.id;
    // state.id = user.name;
    // state.id = user.email;
  }
}

/** actions */
const actions = {
  getUser ({ state, commit }, { newMsg }) {
    // commit("changeMessage", newMsg);
  }
}

/** getters */
const getters = {
  getMsg (state) {
    // return `${state.message} => Length : ${state.message.length}`;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
