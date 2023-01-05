export const state = () => ({
  status: false,
})

export const mutations = {
  SET_LOADING_STATUS(state, status) {
    state.status = status
  },
}

export const actions = {
  setLoadingStatus({ commit }, status) {
    commit('SET_LOADING_STATUS', status)
  },
}

export const getters = {
  status(state) {
    return state.status
  },
}
