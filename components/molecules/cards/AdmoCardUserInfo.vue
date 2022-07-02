<template>
  <div v-if="$store.state.auth.user">
    <p class="font-bold">Welcome back {{ user.username }}!</p>
  </div>
</template>

<script>
export default {
  name: 'AdmoCardUserInfo',
  data() {
    return {
      user: this.$store.state.auth.user
    }
  },
}
</script>
