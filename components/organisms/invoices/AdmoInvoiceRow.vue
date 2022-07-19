<template>
  <AdmoTableRow :key="row.position" :row="row" class="grid grid-cols-5">
    <AdmoTableCell class="pl-4" :text="row.position.toString()" />
    <AdmoTableCell>
      <template #editable>
        <AdmoTextEditable :value="row.description" />
      </template>
    </AdmoTableCell>
    <AdmoTableCell>
      <template #generic>
        <AdmoInput   input-type="number" v-model="rowPrice" min="50" no-shadow />
      </template>
    </AdmoTableCell>
    <AdmoTableCell>
      <template #generic>
        <AdmoInput
          input-type="number"
          v-model="rowQuantity"
          min="1"
          no-shadow
        />
      </template>
    </AdmoTableCell>
    <AdmoTableCell class="text-right pr-4" :text="rowTotalFormatted" />
  </AdmoTableRow>
</template>
<script>
import {numberWithThousandSeperator, replaceDotWithComma} from "@/modules/helpers/numberFormattingHelpers";
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
  watch: {
    rowTotal(newVal, oldVal){
      const diff = parseFloat(newVal) - parseFloat(oldVal)
      this.$store.dispatch('ui/invoice.store/addToTotal', parseFloat(diff))
    }
  },
  computed: {
    rowTotal(){
      return parseFloat(parseFloat(this.rowPrice) * parseFloat(this.rowQuantity)).toFixed(2)
    },
    rowTotalFormatted(){
      return numberWithThousandSeperator(replaceDotWithComma(this.rowTotal).toString()) + ` €` || 0
    }
  },
}
</script>
