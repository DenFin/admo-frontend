<template>
  <div class="self-center">
    <slot name="text"><span>{{ text }}</span></slot>
    <slot name="editable"></slot>
    <slot name="generic"></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
