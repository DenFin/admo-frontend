<template>
  <div class="md:grid" :class="gridClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AdmoGrid',
  props: {
    gridColumns: {
      type: String,
      required: true
    },
    gridSchema: {
      type: String,
    },
    gridGap: {
      type: String,
    }
  },
  computed: {
    gridClasses(){
      return `grid-cols-${this.gridColumns} gap-${this.gridGap}`
    }
  }
}
</script>
