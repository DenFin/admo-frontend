<template>
  <div>
    <slot name="text"><span>{{ text }}</span></slot>
    <slot name="editable"></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>
