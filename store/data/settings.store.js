export const state = () => ({
  settings: null,
  companyName: null
})

export const mutations = {
  SET_COMPANY_NAME(state, name) {
    state.companyName = name
  },
  SET_SETTINGS(state, settings) {
    state.settings = settings
  }
}

export const actions = {
  setCompanyName({ commit }, name) {
    commit('SET_COMPANY_NAME', name)
  },
  setSettings({ commit }, settings) {
    commit('SET_SETTINGS', settings)
  }
}
