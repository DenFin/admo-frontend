export const state = () => ({
  isActive: false,
  deleteWarning: false
})

export const mutations = {
  SET_ACTIVE(state, bool = true){
    state.isActive = bool
  },
  SET_DELETE_WARNING(state, bool) {
    state.deleteWarning = bool
  }
}

export const actions = {
  setActive({ commit }, bool) {
    commit('SET_ACTIVE', bool)
  },
  setDeleteWarning({ commit }, bool) {
    commit('SET_DELETE_WARNING', bool)
  }
}
