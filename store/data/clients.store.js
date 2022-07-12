export const state = () => ({
  clients: [],
})

export const mutations = {
  SET_CLIENTS(state, clients) {
    state.clients = clients
  },
}

export const actions = {
  setClients({ commit }, clients) {
    commit('SET_CLIENTS', clients)
  },
}
