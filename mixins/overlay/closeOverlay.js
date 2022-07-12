import isEmptyObject from "@/modules/helpers/isEmptyObject";

export default {
  methods: {
    closeOverlay(){
      const path = this.$route.path
      this.$store.dispatch('ui/overlay.store/setActive', false)
      this.$store.dispatch('ui/overlay.store/setDeleteWarning', false)
      if(!isEmptyObject(this.$route.query)) {
        console.log(this.$route.query)
        this.$router.replace({ path, query: ''})
      }

    }
  }
}
