<template>
  <h1 v-if="headlineType === 'h1'" class="text-5xl font-bold mb-8">
    {{ text }}
  </h1>
  <h2 v-else-if="headlineType === 'h2'" class="text-3xl font-bold">
    {{ text }}
  </h2>
  <h3 v-else-if="headlineType === 'h3'" class="text-2xl font-bold">
    {{ text }}
  </h3>
</template>

<script>
export default {
  props: {
    headlineType: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
