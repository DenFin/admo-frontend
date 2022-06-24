<template>
  <AdmoContainer class="h-screen flex items-center">
    <div class="w-1/2 mx-auto p-8 shadow-md">
      <AdmoFormRegister @registerSuccesful="registerSuccesful === true" />
      <div v-if="registerSuccesful">
        Registrierung erfolgreich!
      </div>
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
  },
  data(){
    return {
      registerSuccesful: null
    }
  }
}
</script>
