export const state = () => ({
  logoUrl: null
})

export const mutations = {
  SET_LOGO_URL(state, url){
    state.logoUrl = url
  }
}

export const actions = {
  setLogoUrl({ commit }, url) {
    commit('SET_LOGO_URL', url)
  }
}
