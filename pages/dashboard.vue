<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline headline-type="h1" text="Dashboard" />
      <AdmoGrid grid-columns="3" grid-gap="8">
        <AdmoCardGeneral><AdmoCardUserInfo /></AdmoCardGeneral>
        <AdmoCardGeneral v-if="contactsCount">
          <span class="font-bold">Contacts</span><br>
          <span>You have {{ contactsCount }} contacts.</span>
        </AdmoCardGeneral>
        <AdmoCardGeneral />
      </AdmoGrid>
    </AdmoContainer>
  </AdmoPanel>
</template>

<script>
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoCardGeneral from "@/components/molecules/cards/AdmoCardGeneral"
import AdmoGrid from "@/components/layout/AdmoGrid";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoCardUserInfo from "@/components/molecules/cards/AdmoCardUserInfo";
export default {
  name: 'IndexPage',
  components: {AdmoCardUserInfo, AdmoPanel, AdmoHeadline, AdmoContainer, AdmoCardGeneral, AdmoGrid },
  async asyncData({ $axios, $config: { baseURL } }){
    const { data } = await $axios.get(`/api/v1/contacts/count`)
    const contactsCount = data
    return { contactsCount }
  }
}
</script>
