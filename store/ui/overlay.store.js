export const state = () => ({
  isActive: false,
  deleteWarning: false,
  deleteItemId: null
})

export const mutations = {
  SET_ACTIVE(state, bool = true){
    state.isActive = bool
  },
  SET_DELETE_WARNING(state, bool) {
    state.deleteWarning = bool
  },
  SET_DELETE_ITEM_ID(state, id) {
    state.deleteItemId = id
  }
}

export const actions = {
  setActive({ commit }, bool) {
    commit('SET_ACTIVE', bool)
  },
  setDeleteWarning({ commit }, bool) {
    commit('SET_DELETE_WARNING', bool)
  },
  setDeleteItemId({ commit }, id) {
    commit('SET_DELETE_ITEM_ID', id)
  }
}
