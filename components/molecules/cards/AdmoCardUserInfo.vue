<template>
  <div v-if="$store.state.auth.user">
    <p>Welcome back {{ user.username }}!</p>
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
