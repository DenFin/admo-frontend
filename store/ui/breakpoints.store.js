export const state = () => ({
  windowWidth: null,
  isMobile: false
})

export const mutations = {
  SET_WINDOW_WIDTH(state, windowWidth){
    state.windowWidth = windowWidth
  },
  SET_IS_MOBILE(state, bool){
    state.isMobile = bool
  }
}

export const actions = {
  setWindowWidth({ commit }, windowWidth){
    commit('SET_WINDOW_WIDTH', windowWidth)
    if(windowWidth <= 425) {
      commit('SET_IS_MOBILE', true)
    } else {
      commit('SET_IS_MOBILE', false)
    }
  }

}

