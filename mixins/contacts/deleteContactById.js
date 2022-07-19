import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('ui/overlay.store', ['deleteWarning']),
    ...mapState('ui/overlay.store', ['deleteItemId']),
  },
  methods: {
    async deleteContact(_id) {
      let id = _id
      // When ID is not undefined write it to store, otherwise take it from store
      if (id !== undefined) {
        this.$store.dispatch('ui/overlay.store/setDeleteItemId', id)
      } else {
        id = this.deleteItemId
      }
      if (!this.deleteWarning) {
        this.$store.dispatch('ui/overlay.store/setDeleteWarning', true)
        return
      }

      // TODO What if still no ID is set?
      const result = await this.$axios.delete(`/api/v1/contacts/${id}`)
      this.$store.dispatch('ui/overlay.store/setDeleteWarning', false)
      if (result.status === 204) {
        this.$emit('reload-data')
      }
    },
  },
}
