<template>
  <header class="bg-black py-4">
    <AdmoContainer class="flex justify-between items-center">
      <h1 class="text-white font-bold">AdmoApp2022</h1>
      <AdmoButton
        v-if="!$store.state.auth.loggedIn"
        button-type="button"
        button-classes="border-2 rounded border-white text-white font-bold"
        text="Login"
        to="/auth/login"
      />
      <AdmoButton
        v-else-if="$store.state.auth.loggedIn"
        button-type="button"
        button-classes="border-2 rounded border-white text-white font-bold"
        text="Logout"
        to="/auth/logout"
      />
    </AdmoContainer>
  </header>
</template>
<script>
import AdmoContainer from '@/components/layout/AdmoContainer'
import AdmoButton from '@/components/atoms/AdmoButton'
export default {
  components: { AdmoButton, AdmoContainer },
}
</script>
