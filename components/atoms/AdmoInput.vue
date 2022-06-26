<template>
  <input v-bind:value="value" v-on:input="updateValue($event.target.value)" class="shadow-md p-2 focus:border-4 focus:border-solid focus:border-slate-200 block" :type="inputType">
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      required: true,
      default: 'text'
    },
    placeholderText: {
      type: String,
      required: false,
    },
    value: {
      type: String
    }
  },

  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>
