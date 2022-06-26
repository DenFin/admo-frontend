import {mapState} from "vuex";


export default {
  computed: {
    ...mapState('ui/overlay.store', ['isActive'])
  },
  methods: {
    openOverlay(){
      this.$store.dispatch('ui/overlay.store/setActive')
    },
    async reloadData(apiEndpoint){
      this.contacts = await this.$axios.$get(`/api/v1/${apiEndpoint}`)
    }
  }
}
