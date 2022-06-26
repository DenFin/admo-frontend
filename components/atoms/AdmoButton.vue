<template>
  <nuxt-link v-if="to" :to="to" class="bg-blue-600 text-white font-bold px-4 py-3 block">{{ text }}</nuxt-link>
  <button v-else :type="buttonType" class="text-white font-bold block" :class="[
    buttonClasses,
    {
      'bg-blue-600 ': !buttonClasses,
      'py-1 px-2': isSmall,
      'py-3 px-4': !isSmall,
    }
  ]">{{ text }}</button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: true,
    },
    buttonClasses: {
      type: String,
      required: false,
      default: null
    },
    text: {
      type: String,
      required: true,
      default: ''
    },
    to: {
      type: String,
      required: false,
    },
    isSmall: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
