<template>
  <AdmoContainer>
    <h1>Login page</h1>
    <AdmoFormLogin />
  </AdmoContainer>
</template>
<script>
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoFormLogin from "@/components/molecules/forms/AdmoFormLogin";
export default {
  components: {AdmoFormLogin, AdmoContainer}
}
</script>
