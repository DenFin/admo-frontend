<template>
  <nuxt-link v-if="to" :to="to" :class="[
    buttonClasses,
    {
      'bg-white border-2 border-gray text-gray font-bold px-4 py-3 block rounded ': !buttonClasses,
      'py-1 px-2': isSmall,
      'py-3 px-4': !isSmall,
    }
  ]">{{ text }}</nuxt-link>
  <button v-else :type="buttonType" class="font-bold block rounded" :class="[
    buttonClasses,
    {
      'bg-white border-2 border-gray-500 text-gray ': !buttonClasses,
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
