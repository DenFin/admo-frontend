<template>
  <div class="border-b-2 py-2 grid">
      <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'AdmoTableRow',
  data(){
    return {
      rowEdited: { ...this.row }
    }
  }
}
</script>
