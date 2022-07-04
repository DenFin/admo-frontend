<template>
  <AdmoPanel>
    <AdmoContainer v-if="invoice">
      <AdmoHeadline headline-type="h1" :text="`${invoice.nr} ${invoice.title}`" />
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import { SupabaseStorageClient } from '@supabase/storage-js'
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";

const STORAGE_URL = process.env.SUPABASE_URL
const SERVICE_KEY = process.env.SUPABASE_API_KEY

console.log(STORAGE_URL, SERVICE_KEY)

const storageClient = new SupabaseStorageClient(STORAGE_URL, {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
})

export default {
  components: { AdmoHeadline, AdmoContainer, AdmoPanel },
  async asyncData({ params, $axios }) {
    const id = params.id
    const invoice  = await $axios.$get(`/api/v1/invoices/${id}`)
    const { data, error } = await storageClient.getBucket('invoices')

    return { invoice, data, error }
  }
}
</script>
