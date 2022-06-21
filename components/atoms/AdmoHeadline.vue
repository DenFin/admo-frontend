<template>
  <h1 v-if="headlineType === 'h1'" class="text-5xl font-bold">{{ text }}</h1>
  <h1 v-else-if="headlineType === 'h2'" class="text-3xl font-bold">{{ text }}</h1>
</template>

<script>
export default {
  props: {
    headlineType: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
