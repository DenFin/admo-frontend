<template>
  <div class="border-b-2 py-2 grid" :class="`grid-cols-${headCells.length}`">
    <div v-for="(cell, index) in headCells" :key="index">
      <span class="font-bold">{{ cell }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headCells: {
      type: Array,
      required: true,
    },
  },
}
</script>
