<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="w-full inline-flex justify-between">
          <AdmoHeadline headline-type="h1" text="Invoices" />
          <div class="flex">
            <AdmoButton to="/invoices/create" class="w-auto self-start mr-4" button-type="button" text="Create new invoice" />
          </div>
        </div>
      </AdmoContainer>
      <AdmoContainer>
        <AdmoTable>
          <AdmoTableRow v-for="invoice in invoices" :key="invoice._id" class="grid grid-cols-6">
            <AdmoTableCell >
              <template #text>
                <nuxt-link :to="`/invoices/${invoice._id}`">{{ invoice.nr }}</nuxt-link>
              </template>
            </AdmoTableCell>
            <AdmoTableCell :text="invoice.title" />
            <AdmoTableCell :text="invoice.client" />
            <AdmoTableCell :text="invoice.date" />
            <AdmoTableCell :text="invoice.status" />
            <AdmoTableCell>
              <template #generic>
                <AdmoButton text="Delete" button-type="button" @click.stop.native="deleteInvoice(invoice._id)" />
              </template>
            </AdmoTableCell>
          </AdmoTableRow>
        </AdmoTable>
      </AdmoContainer>

    </AdmoPanel>
    <AdmoOverlay v-if="isActive">
      <AdmoFormContactCreate @reload-data="reloadData('invoices')" />
    </AdmoOverlay>

  </div>
</template>
<script>

import hasOverlayMixin from "@/pages/hasOverlayMixin"
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoOverlay from "@/components/molecules/overlays/AdmoOverlay";
import AdmoFormContactCreate from "@/components/molecules/forms/AdmoFormContactCreate";
import AdmoTable from "~/components/molecules/tables/AdmoTable";
import AdmoTableRow from "~/components/molecules/tables/AdmoTableRow";
import AdmoTableCell from "~/components/molecules/tables/AdmoTableCell";

export default {
  components: {
    AdmoTableCell,
    AdmoTableRow,
    AdmoTable,
    AdmoOverlay, AdmoButton, AdmoHeadline, AdmoContainer, AdmoPanel, AdmoFormContactCreate
  },
  mixins: [hasOverlayMixin],
  methods: {
    async deleteInvoice(id){
      const result = await this.$axios.delete(`/api/v1/invoices/${id}`)
      if(result.status === 204) {
        await this.reloadData('invoices')
      }
    },
    async reloadData(apiEndpoint){
      this.invoices = await this.$axios.$get(`/api/v1/${apiEndpoint}`)
    }
  },
  async asyncData({ $axios }){
    const invoices = await $axios.$get('/api/v1/invoices')
    return { invoices }
  }
}
</script>
