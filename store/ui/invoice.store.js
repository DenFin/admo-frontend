export const state = () => ({
  invoiceTotal: null,
  invoiceTax: null,
  invoiceTotalWithTax: null
})

export const mutations = {
  ADD_TO_TOTAL(state, addend) {
    state.invoiceTotal += addend
    state.invoiceTax = parseFloat(state.invoiceTotal * 0.19).toFixed(2)
    state.invoiceTotalWithTax = parseFloat(state.invoiceTotal + parseFloat(state.invoiceTax)).toFixed(2)
  }
}

export const actions = {
  addToTotal({ commit }, addend){
    commit('ADD_TO_TOTAL', addend)
  }
}
