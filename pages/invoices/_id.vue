<template>
  <AdmoPanel>
    <AdmoContainer v-if="invoice">
      <AdmoHeadline headline-type="h1" :text="`${invoice.nr} ${invoice.title}`" />
      <AdmoBox>
        <span class="font-bold">Rechnungsdatum</span><br>
        <span>{{ getFormattedDate(invoice.date) }}</span><br><br>
        <span class="font-bold">Fälligkeitsdatum</span><br>
        <span>{{ getFormattedDate(dueDate) }}</span><br><br>
        <span class="font-bold">Status</span><br>
        <AdmoPill :text="isDue ? 'Due' : invoice.status" :classes="isDue ? 'bg-red-500' : 'bg-yellow-500'"></AdmoPill>
      </AdmoBox>
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import { SupabaseStorageClient } from '@supabase/storage-js'
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoBox from "@/components/molecules/boxes/AdmoBox";
import dateHelperMixin from "@/mixins/dateHelperMixin";
import AdmoPill from "@/components/atoms/AdmoPill";
import {isInvoiceDue} from "@/modules/invoices/invoicesHelpers";

const STORAGE_URL = process.env.SUPABASE_URL
const SERVICE_KEY = process.env.SUPABASE_API_KEY

console.log(STORAGE_URL, SERVICE_KEY)

const storageClient = new SupabaseStorageClient(STORAGE_URL, {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
})

const FORTNIGHT = 12096e5

export default {
  components: {AdmoPill, AdmoBox, AdmoHeadline, AdmoContainer, AdmoPanel },
  mixins: [dateHelperMixin],
  computed: {
    dueDate(){
      const invoiceDateInMilli = new Date(this.invoice.date).getTime()
      return new Date(invoiceDateInMilli + FORTNIGHT)
    },
    isDue(){
      return isInvoiceDue(this.dueDate, new Date().now)
    }
  },
  mounted(){
    let date = new Date(this.invoice.date)
    date = date.getTime()
    console.log('date', date)
  },
  async asyncData({ params, $axios }) {
    const id = params.id
    const invoice  = await $axios.$get(`/api/v1/invoices/${id}`)
    const { data, error } = await storageClient.getBucket('invoices')

    return { invoice, data, error }
  }
}
</script>
