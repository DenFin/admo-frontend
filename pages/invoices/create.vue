<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="w-full inline-flex justify-between">
          <AdmoHeadline headline-type="h1" text="Invoices" />
          <div class="flex">
            <AdmoButton
              to="/invoices/create"
              class="w-auto self-start mr-4"
              button-type="button"
              text="Create new invoice"
            />
            <AdmoButton
              class="w-auto self-start"
              button-type="button"
              text="Show preview"
              @click.native="showPreview"
            />
          </div>
        </div>
      </AdmoContainer>
      <AdmoContainer>
        <AdmoBox class="mb-8">
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Kunde</label>
            <select
              id=""
              class="block p-4 w-1/2"
              name=""
              @change="setClient($event)"
            >
              <option disabled selected value="">
                Wählen Sie einen Kunden aus
              </option>
              <option
                v-for="client in clients"
                :key="client._id"
                :value="client.company"
              >
                {{ client.company }}
              </option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Rechnungstitel</label>
            <AdmoInput
              v-model="invoice.generalInformation.invoiceTitel"
              input-type="text"
              class="w-1/2"
            />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Rechnungsdatum</label>
            <AdmoInput
              v-model="invoice.generalInformation.invoiceDate"
              input-type="text"
              type="date"
              class="w-1/2"
            />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Rechnungsnummer</label>
            <AdmoInput
              v-model="invoice.generalInformation.invoiceNumber"
              input-type="text"
              class="w-1/2"
            />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for=""
              >Ust.-Id. vom Kunden</label
            >
            <AdmoInput disabled input-type="text" class="w-1/2" v-if="currentClient" :value="currentClient.taxId" />
          </div>
        </AdmoBox>
      </AdmoContainer>
      <AdmoContainer class="mb-16">
        <AdmoTableHead :head-cells="headCells" />
        <AdmoInvoice :rows="rows" />
        <AdmoInvoiceFoot />
        <div class="flex">
          <AdmoButton
            class="mt-4 mr-4"
            text="Add row"
            button-type="button"
            @click.native="addRow"
          />
          <!--          <AdmoButton class="mt-4 mr-4" @click.native="addRow" text="Add sub row" button-type="button" />-->
          <AdmoButton
            button-classes="bg-green-500 text-white mt-4"
            text="Save invoice"
            button-type="button"
            @click.native="saveInvoice"
          />
        </div>
      </AdmoContainer>
      <AdmoContainer>
        <AdmoPdfPreview :rows="rows" :invoice="invoice" />
        <AdmoButton
          class="m-8 bg-gray mx-auto"
          text="Create PDF"
          button-type="button"
          @click.native="addRow"
        />
      </AdmoContainer>
    </AdmoPanel>
    <AdmoOverlay v-if="isActive">
      <AdmoFormContactCreate @reload-data="reloadData('invoices')" />
    </AdmoOverlay>
    <AdmoNotification
      v-if="success"
      :text="`Rechnung ${invoice.generalInformation.invoiceNumber} wurde erfolgreich erstellt. PDF: ${downloadLink}`"
    />
    <AdmoSpinner v-if="loading" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import hasOverlayMixin from '@/mixins/overlay/hasOverlayMixin'
import AdmoPanel from '@/components/layout/AdmoPanel'
import AdmoContainer from '@/components/layout/AdmoContainer'
import AdmoHeadline from '@/components/atoms/AdmoHeadline'
import AdmoButton from '@/components/atoms/AdmoButton'
import AdmoOverlay from '@/components/molecules/overlays/AdmoOverlay'
import AdmoTableHead from '@/components/molecules/tables/AdmoTableHead'
import AdmoFormContactCreate from '@/components/molecules/forms/AdmoFormContactCreate'
import AdmoPdfPreview from '@/components/organisms/pdf_preview/AdmoPdfPreview'
import AdmoBox from '@/components/molecules/boxes/AdmoBox'
import AdmoInput from '@/components/atoms/AdmoInput'
import AdmoNotification from '@/components/molecules/notifications/AdmoNotification'
import AdmoInvoiceFoot from "@/components/organisms/invoices/AdmoInvoiceFoot";
import AdmoSpinner from '@/components/atoms/AdmoSpinner'
import AdmoInvoice from "@/components/organisms/invoices/AdmoInvoice";
export default {
  components: {
    AdmoInvoice,
    AdmoInvoiceFoot,
    AdmoNotification,
    AdmoInput,
    AdmoBox,
    AdmoPdfPreview,
    AdmoTableHead,
    AdmoOverlay,
    AdmoButton,
    AdmoHeadline,
    AdmoContainer,
    AdmoPanel,
    AdmoFormContactCreate,
    AdmoSpinner
  },
  mixins: [hasOverlayMixin],
  computed: {
    ...mapState('data/clients.store', ['clients']),
  },
  async asyncData({ $axios, store }) {
    if (
      store.state['data/clients.store/clients']?.length === 0 ||
      store.state['data/clients.store/clients'] === undefined
    ) {
      const clients = await $axios.$get('/api/v1/clients')
      if (clients.length > 0) {
        store.dispatch('data/clients.store/setClients', clients)
      }
      return { clients }
    }
  },
  data() {
    return {
      headCells: ['Position', 'Beschreibung', 'Satz', 'Menge', 'Gesamt'],
      invoice: {
        generalInformation: {
          client: null,
          invoiceTitel: null,
          invoiceNumber: null,
          invoiceDate: null,
          moreValueTaxIdOfClient: null,
        },
      },
      rows: [
        {
          position: 1,
          description: '',
          price: '',
          quantity: '',
          total: '',
        },
      ],
      success: false,
      download: null,
      downloadLink: null,
      loading: false,
      currentClient: null,
    }
  },
  methods: {
    addRow() {
      const length = this.rows.length
      this.rows.push({ position: length + 1 })
    },
    updateValue(el) {
      console.log(el)
    },
    showPreview() {
      console.log('test')
    },
    setClient(e) {
      console.log(e.target.value)
      this.invoice.generalInformation.client = e.target.value
      this.currentClient = this.clients.find(client => client.company === e.target.value)
    },
    showSuccessMessage(pdf) {
      this.success = true
      this.download = pdf.data.Key
      setTimeout(() => {
        this.success = false
      }, 5000)
    },
    async saveInvoice() {
      this.loading = true
      const invoice = {
        nr: this.invoice.generalInformation.invoiceNumber,
        client: this.invoice.generalInformation.client,
        title: this.invoice.generalInformation.invoiceTitel,
        date: this.invoice.generalInformation.invoiceDate,
        dateRangeStart: null,
        dateRangeEnd: null,
        status: 'pending',
        items: JSON.stringify(this.rows),
      }

      const result = await this.$axios.$post('/api/v1/invoices', invoice)
      console.log(result)
      if (result.pdf?.error === null) {
        this.showSuccessMessage(result.pdf)
      }
      if (result.pdfLink) {
        this.downloadLink = result.pdfLink.publicURL
      }
      console.log('result', result)
      if (result.status === 201) {
        this.loading = false
        console.log('IT WORKED')
      }
    },
    async createPDF() {},
  },
  mounted(){
    // eslint-disable-next-line
    if (process.client) {
      document.addEventListener('keydown', (e) => {
        console.log('TEST')
        const evtobj = window.event? event : e
        console.log(evtobj)
        if (evtobj.keyCode === 190 && evtobj.code === 'MetaLeft') {
          this.addRow()
        }
      })
    }

  }
}
</script>
