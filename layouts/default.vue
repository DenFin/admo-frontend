<template>
  <div>
    <AdmoHeader />
    <AdmoNav v-if="$store.state.auth.loggedIn" />
    <Nuxt />
  </div>
</template>
<script>
import { mapState } from "vuex";
import AdmoHeader from "@/components/layout/AdmoHeader";
import AdmoNav from "@/components/molecules/nav/AdmoNav";

export default {
  components: { AdmoNav, AdmoHeader },
  computed: {
    ...mapState('ui/overlay.store', ['isActive'])
  },
  mounted(){
    if(!this.$store.state.auth.loggedIn) this.$router.push('/auth/login')
    console.log(this.$auth)
  },
}
</script>
