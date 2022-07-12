<template>
  <div>
    <AdmoHeader />
    <AdmoNav v-if="$store.state.auth.loggedIn" />
    <Nuxt />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import AdmoHeader from '@/components/layout/AdmoHeader'
import AdmoNav from '@/components/molecules/nav/AdmoNav'

export default {
  components: { AdmoNav, AdmoHeader },
  computed: {
    ...mapState('ui/overlay.store', ['isActive']),
  },
  mounted() {
    if (!this.$store.state.auth.loggedIn) this.$router.push('/auth/login')
    if (window !== 'undefined') {
      this.getWindowWidth()
      window.addEventListener('resize', this.getWindowWidth)
    }
  },
  methods: {
    getWindowWidth() {
      this.$store.dispatch(
        'ui/breakpoints.store/setWindowWidth',
        window.innerWidth
      )
    },
  },
}
</script>
