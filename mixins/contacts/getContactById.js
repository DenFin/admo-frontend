export default {
  async asyncData({ $axios }){
    const { data } = await $axios.get(`/api/v1/contacts/${id}`)
  }
}
