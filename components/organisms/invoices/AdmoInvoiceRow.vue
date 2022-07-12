<template>
  <AdmoTableRow :key="row.position" :row="row" class="grid grid-cols-5">
    <AdmoTableCell :text="row.position.toString()" />
    <AdmoTableCell>
      <template #editable>
        <AdmoTextEditable :value="row.description" />
      </template>
    </AdmoTableCell>
    <AdmoTableCell>
      <template #generic>
        <AdmoInput  @change.native="rowTotal" input-type="number" v-model="rowPrice" min="50" no-shadow />
      </template>
    </AdmoTableCell>
    <AdmoTableCell>
      <template #generic>
        <AdmoInput
          @change.native="rowTotal"
          input-type="number"
          v-model="rowQuantity"
          min="1"
          no-shadow
        />
      </template>
    </AdmoTableCell>
    <AdmoTableCell :text="rowTotal()" />
  </AdmoTableRow>
</template>
<script>
import AdmoTableRow from '@/components/molecules/tables/AdmoTableRow'
import AdmoTableCell from '@/components/molecules/tables/AdmoTableCell'
import AdmoTextEditable from '@/components/atoms/AdmoTextEditable'
import AdmoInput from '@/components/atoms/AdmoInput'
export default {
  components: { AdmoInput, AdmoTextEditable, AdmoTableCell, AdmoTableRow },
  props: {
    row: {
      type: Object,
    },
  },
  data(){
    return {
      rowPrice: this.row.price || 0,
      rowQuantity: this.rowQuantity || 0
    }
  },
  methods: {
    rowTotal(){
      console.log('CHANGE')
      return this.rowPrice * this.rowQuantity || 0
    }
  }
}
</script>
