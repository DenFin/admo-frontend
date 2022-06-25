<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline headline-type="h1" text="Dashboard" />
      <AdmoGrid grid-columns="3" grid-gap="8">
        <AdmoCardGeneral><AdmoCardUserInfo /></AdmoCardGeneral>
        <AdmoCardGeneral />
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
  data(){
    return {
      number: 1
    }
  },
  computed: {
    random(){
      return this.number + 1
    }
  }
}
</script>
