<template>
  <nuxt-link v-if="to" :to="to" class="bg-blue-600 text-white font-bold px-4 py-3 block">{{ text }}</nuxt-link>
  <button v-else :type="buttonType" class="bg-blue-600 text-white font-bold px-4 py-3 block">{{ text }}</button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
      default: ''
    },
    to: {
      type: String,
      required: false,
    }
  }
}
</script>
