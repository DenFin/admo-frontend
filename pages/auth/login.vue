<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoCardGeneral class="max-w-xl mx-auto">
        <AdmoFormLogin class="w-full" />
      </AdmoCardGeneral>
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoFormLogin from "@/components/molecules/forms/AdmoFormLogin";
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoCardGeneral from "@/components/molecules/cards/AdmoCardGeneral";
export default {
  components: {AdmoCardGeneral, AdmoPanel, AdmoFormLogin, AdmoContainer}
}
</script>
