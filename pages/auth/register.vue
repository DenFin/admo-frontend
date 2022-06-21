<template>
  <AdmoContainer class="h-screen flex items-center">
    <div class="w-1/2 mx-auto p-8 shadow-md">
      <AdmoFormRegister />
    </div>
  </AdmoContainer>
</template>

<script>
import AdmoContainer from "~/components/layout/AdmoContainer"
import AdmoFormRegister from "~/components/molecules/forms/AdmoFormRegister";

export default {
  components: {
    AdmoContainer,
    AdmoFormRegister
  }
}
</script>
