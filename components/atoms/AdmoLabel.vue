<template>
  <label :for="forAttr"
    ><span class="font-bold">{{ text }}</span></label
  >
</template>

<script>
export default {
  props: {
    forAttr: {
      type: String,
      required: false,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
