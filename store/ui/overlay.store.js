export const state = () => ({
  isActive: false
})

export const mutations = {
  SET_ACTIVE(state, bool = true){
    state.isActive = bool
  }
}

export const actions = {
  setActive({ commit }, bool) {
    console.log(bool)
    commit('SET_ACTIVE', bool)
  }
}
