<template>
  <span class="px-3 py-1 rounded-lg" :class="classes || classesFromStatus">{{ text }}</span>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
        required: false,
        default: ''
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    classesFromStatus(){
      return this.text === 'pending' ? 'bg-yellow-300' : ''
    }
  }
}
</script>
