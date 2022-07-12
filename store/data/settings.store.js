export const state = () => ({
  companyName: null
})

export const mutations = {
  SET_COMPANY_NAME(state, name) {
    state.companyName = name
  }
}

export const actions = {
  setCompanyName({ commit }, name) {
    commit('SET_COMPANY_NAME', name)
  }
}
