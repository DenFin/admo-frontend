<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline headline-type="h1" text="Dashboard" />
      <AdmoGrid grid-columns="3" grid-gap="8">
        <AdmoCardGeneral><AdmoCardUserInfo /></AdmoCardGeneral>
        <AdmoCardGeneral v-if="contactsCount">
          <span class="font-bold">Contacts</span><br />
          <span>You have {{ contactsCount }} contacts.</span>
        </AdmoCardGeneral>
        <AdmoCardGeneral>
          <span class="font-bold">Your session will expire at</span><br />
          <span>{{ sessionExpirationTime }}</span>
        </AdmoCardGeneral>
      </AdmoGrid>
    </AdmoContainer>
  </AdmoPanel>
</template>

<script>
import AdmoContainer from '@/components/layout/AdmoContainer'
import AdmoCardGeneral from '@/components/molecules/cards/AdmoCardGeneral'
import AdmoGrid from '@/components/layout/AdmoGrid'
import AdmoHeadline from '@/components/atoms/AdmoHeadline'
import AdmoPanel from '@/components/layout/AdmoPanel'
import AdmoCardUserInfo from '@/components/molecules/cards/AdmoCardUserInfo'
export default {
  name: 'IndexPage',
  components: {
    AdmoCardUserInfo,
    AdmoPanel,
    AdmoHeadline,
    AdmoContainer,
    AdmoCardGeneral,
    AdmoGrid,
  },
  async asyncData({ $axios, $config: { baseURL } }) {
    const { data } = await $axios.get(`/api/v1/contacts/count`)
    const contactsCount = data
    return { contactsCount }
  },
  data() {
    return {
      sessionExpirationTime: null,
      milliseconds:
        this.$auth.strategy.token.$storage._state['_token_expiration.local'],
      now: new Date(),
    }
  },
  mounted() {
    // const now = this.now
    // const milliseconds = this.milliseconds
    // setInterval(() => {
    //   const seconds = Math.floor(((milliseconds - now) / 1000))
    //   const minutes = Math.floor(((milliseconds - now) / 1000) / 60)
    //   const time = `${minutes}:${seconds}`
    //   console.log('time', time)
    // }, 1000)
  },
  methods: {
    getExpirationTime() {
      const milliseconds =
        this.$auth.strategy.token.$storage._state['_token_expiration.local']
      const date = new Date(milliseconds)
      this.sessionExpirationTime = date.toLocaleTimeString('de')
    },
  },
}
</script>
