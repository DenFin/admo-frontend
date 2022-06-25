<template>
  <AdmoPanel>
    <AdmoContainer>
      <p class="font-bold text-center text-5xl">Thanks for stopping by. <br> See you later 👋</p>
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";

export default {
  components: {AdmoContainer, AdmoPanel},
  mounted(){
    this.$auth.logout()
  }
}
</script>
