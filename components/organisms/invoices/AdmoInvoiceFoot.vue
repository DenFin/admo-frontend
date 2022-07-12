<template>
  <div class="">
    <div class="bg-gray-100 border-b-2 text-gray-700 font-bold grid grid-cols-5">
      <div class="py-4 pl-4">Umsatzsteuer 19%</div>
      <div class="py-4"></div>
      <div class="py-4"></div>
      <div class="py-4"></div>
      <div class="py-4 pr-4 text-right">{{ invoiceTaxFormatted }}</div>
    </div>
    <div class="bg-green-100 border-b-2 text-green-700 font-bold grid grid-cols-5">
      <div class="py-4 pl-4">Brutto-Rechnungsbetrag</div>
      <div class="py-4"></div>
      <div class="py-4"></div>
      <div class="py-4"></div>
      <div class="py-4 pr-4 text-right">{{ invoiceTotalWithTaxFormatted || invoiceTotalFormatted }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {numberWithThousandSeperator, replaceDotWithComma} from "@/modules/helpers/numberFormattingHelpers";
export default {
  computed: {
    ...mapState('ui/invoice.store', ['invoiceTax']),
    ...mapState('ui/invoice.store', ['invoiceTotal']),
    ...mapState('ui/invoice.store', ['invoiceTotalWithTax']),
    invoiceTaxFormatted(){
      if(isNaN(this.invoiceTax) || !this.invoiceTax) return '0,00 €'
      return numberWithThousandSeperator(replaceDotWithComma(parseFloat(this.invoiceTax).toFixed(2)) || 0) + ` €`
    },
    invoiceTotalFormatted(){
      if(isNaN(this.invoiceTotal) || !this.invoiceTotal) return '0,00 €'
      return numberWithThousandSeperator(replaceDotWithComma(parseFloat(this.invoiceTotal).toFixed(2)) || 0) + ` €`
    },
    invoiceTotalWithTaxFormatted(){
      if(isNaN(this.invoiceTotalWithTax) || !this.invoiceTotalWithTax) return '0,00 €'
      return numberWithThousandSeperator(replaceDotWithComma(parseFloat(this.invoiceTotalWithTax).toFixed(2) || 0)) + ` €`
    },

  },
  methods: {
    chainTest(){
      console.log(this)
    }
  }
}
</script>
