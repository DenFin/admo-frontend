<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoFormLogin class="w-full lg:w-1/3" />
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoFormLogin from "@/components/molecules/forms/AdmoFormLogin";
import AdmoPanel from "@/components/layout/AdmoPanel";
export default {
  components: {AdmoPanel, AdmoFormLogin, AdmoContainer}
}
</script>
