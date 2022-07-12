<template>
  <input
    :min="min"
    :value="value"
    class="p-2 focus:border-4 focus:border-solid focus:border-slate-200 block"
    :class="{
      'shadow-md ': !noShadow,
    }"
    :type="inputType"
    @input="updateValue($event.target.value)"
  />
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      required: true,
      default: 'text',
    },
    placeholderText: {
      type: String,
      required: false,
    },
    value: {
      type: String,
    },
    min: {
      type: String,
    },
    noShadow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>
