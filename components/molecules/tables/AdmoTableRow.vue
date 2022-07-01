<template>
  <div class="border-b-2 py-2 flex">
      <div class="w-1/5"><span class="font-bold">{{ row.position }}</span></div>
      <div class="w-1/5"><AdmoTextEditable v-model="rowEdited.description" /></div>
      <div class="w-1/5"><AdmoTextEditable v-model="rowEdited.price" /></div>
      <div class="w-1/5"><AdmoTextEditable v-model="rowEdited.quantity" /></div>
      <div class="w-1/5"><AdmoTextEditable v-model="rowEdited.total" /></div>
  </div>
</template>

<script>
import AdmoTextEditable from "@/components/atoms/AdmoTextEditable";

export default {
  name: 'AdmoTableRow',
  components: {
    AdmoTextEditable
  },
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      rowEdited: { ...this.row }
    }
  }
}
</script>
