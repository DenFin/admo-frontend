<template>
  <div class="fixed top-4 left-4 right-4 bg-green-500 p-4 rounded border border-white">
    <div class="text-white">
      {{ text }}
    </div>
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
