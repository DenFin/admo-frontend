<template>
  <div>
    <AdmoInvoiceRow v-for="(row, index) in rows" :row="row" :key="index"  />
  </div>
</template>

<script>
import AdmoInvoiceRow from "@/components/organisms/invoices/AdmoInvoiceRow";
export default {
  components: {AdmoInvoiceRow},
  props: {
    rows: {
      type: Array
    }
  }
}
</script>
