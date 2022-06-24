<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline headline-type="h1" text="Dashboard" />
      <AdmoCardGeneral />
      <AdmoGrid grid-columns="2" grid-gap="8">
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
export default {
  name: 'IndexPage',
  components: {AdmoPanel, AdmoHeadline, AdmoContainer, AdmoCardGeneral, AdmoGrid },
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
