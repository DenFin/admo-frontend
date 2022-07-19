<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="w-full inline-flex justify-between">
          <AdmoHeadline headline-type="h1" text="Invoices" />
          <div class="flex">
            <AdmoButton
              to="/invoices/create"
              class="w-auto self-start"
              button-classes="bg-white rounded border-2 border-black font-bold"
              button-type="button"
              text="Create new invoice"
            />
          </div>
        </div>
      </AdmoContainer>
      <AdmoContainer>
        <AdmoTable>
          <AdmoTableHead :head-cells="headCells" />
          <AdmoTableRow
            v-for="invoice in invoicesSorted"
            :key="invoice._id"
            class="grid grid-cols-6"
          >
            <AdmoTableCell>
              <template #text>
                <nuxt-link :to="`/invoices/${invoice._id}`">{{
                  invoice.nr
                }}</nuxt-link>
              </template>
            </AdmoTableCell>
            <AdmoTableCell :text="invoice.title" />
            <AdmoTableCell :text="invoice.client" />
            <AdmoTableCell
              v-if="invoice.date"
              :text="getFormattedDate(invoice.date)"
            />
            <AdmoTableCell>
              <template #generic>
                <AdmoPill :text="invoice.status"></AdmoPill>
              </template>
            </AdmoTableCell>
            <AdmoTableCell>
              <template #generic>
                <AdmoButton
                  is-small
                  text="Delete"
                  button-type="button"
                  :button-classes="'bg-red-600 text-white'"
                  @click.stop.native="deleteInvoice(invoice._id)"
                />
              </template>
            </AdmoTableCell>
          </AdmoTableRow>
        </AdmoTable>
      </AdmoContainer>
    </AdmoPanel>
    <AdmoOverlay v-if="isActive || deleteWarning">
      <AdmoFormContactCreate v-if="isActive" @reload-data="reloadData('invoices')" />
      <AdmoOverlayConfirmDelete
        v-if="deleteWarning"
        content-type="Rechnung"
        @reload-data="reloadData('invoices')"
      />
    </AdmoOverlay>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import hasOverlayMixin from '@/mixins/overlay/hasOverlayMixin'
import deleteInvoiceById from "@/mixins/invoices/deleteInvoiceById";
import AdmoPanel from '@/components/layout/AdmoPanel'
import AdmoContainer from '@/components/layout/AdmoContainer'
import AdmoHeadline from '@/components/atoms/AdmoHeadline'
import AdmoButton from '@/components/atoms/AdmoButton'
import AdmoOverlay from '@/components/molecules/overlays/AdmoOverlay'
import AdmoFormContactCreate from '@/components/molecules/forms/AdmoFormContactCreate'
import AdmoTable from '~/components/molecules/tables/AdmoTable'
import AdmoTableRow from '~/components/molecules/tables/AdmoTableRow'
import AdmoTableCell from '~/components/molecules/tables/AdmoTableCell'
import AdmoPill from '@/components/atoms/AdmoPill'
import { convertToLocaleDateString } from '~/modules/helpers/dateHelper'
import AdmoTableHead from '@/components/molecules/tables/AdmoTableHead'
import AdmoOverlayConfirmDelete from "@/components/molecules/overlays/AdmoOverlayConfirmDelete";

export default {
  components: {
    AdmoOverlayConfirmDelete,
    AdmoTableHead,
    AdmoPill,
    AdmoTableCell,
    AdmoTableRow,
    AdmoTable,
    AdmoOverlay,
    AdmoButton,
    AdmoHeadline,
    AdmoContainer,
    AdmoPanel,
    AdmoFormContactCreate,
  },
  mixins: [hasOverlayMixin, deleteInvoiceById],

  async asyncData({ $axios }) {
    const invoices = await $axios.$get('/api/v1/invoices')
    return { invoices }
  },
  data() {
    return {
      headCells: [
        'Rechnungsnummer',
        'Titel',
        'Kunde',
        'Rechnungsdatum',
        'Status',
        'Aktionen',
      ],
    }
  },
  computed: {
    ...mapState('ui/overlay.store', ['deleteWarning']),
    invoicesSorted() {
      const invoicesSorted = this.invoices
      return invoicesSorted.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })
    },
  },
  methods: {
    getFormattedDate(date) {
      return convertToLocaleDateString(date)
    },
    async reloadData(apiEndpoint) {
      this.invoices = await this.$axios.$get(`/api/v1/${apiEndpoint}`)
    },
  },
}
</script>
