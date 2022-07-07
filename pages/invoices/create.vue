<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="w-full inline-flex justify-between">
          <AdmoHeadline headline-type="h1" text="Invoices" />
          <div class="flex">
            <AdmoButton to="/invoices/create" class="w-auto self-start mr-4" button-type="button" text="Create new invoice" />
            <AdmoButton @click.native="showPreview" class="w-auto self-start" button-type="button" text="Show preview" />
          </div>
        </div>
      </AdmoContainer>
      <AdmoContainer>
        <AdmoBox class="mb-8">
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Kunde</label>
            <select @change="setClient($event)" class="block p-4 w-1/2" name="" id="">
              <option v-for="client in clients" :key="client._id" :value="client.company">{{ client.company }}</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Rechnungstitel</label>
            <AdmoInput input-type="text" v-model="invoice.generalInformation.invoiceTitel" class="w-1/2" />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Rechnungsdatum</label>
            <AdmoInput input-type="text" type="date" v-model="invoice.generalInformation.invoiceDate" class="w-1/2" />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Rechnungsnummer</label>
            <AdmoInput input-type="text" v-model="invoice.generalInformation.invoiceNumber" class="w-1/2" />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Ust.-Id. vom Kunden</label>
            <AdmoInput input-type="text" class="w-1/2" />
          </div>
        </AdmoBox>
      </AdmoContainer>
      <AdmoContainer>
        <AdmoTableHead :head-cells="headCells" />
        <AdmoTableRow v-for="row in rows" :key="row.position" :row="row" class="grid grid-cols-5">
          <AdmoTableCell :text="row.position.toString()"/>
          <AdmoTableCell>
            <template #editable>
              <AdmoTextEditable :value="row.description"/>
            </template>
          </AdmoTableCell>
          <AdmoTableCell :text="row.price"/>
          <AdmoTableCell :text="row.quantity"/>
          <AdmoTableCell :text="row.total"/>
        </AdmoTableRow>
        <div class="flex">
          <AdmoButton class="mt-4 mr-4" @click.native="addRow" text="Add row" button-type="button" />
          <AdmoButton class="mt-4 mr-4" @click.native="addRow" text="Add sub row" button-type="button" />
          <AdmoButton class="mt-4 " @click.native="saveInvoice" text="Save invoice" button-type="button" />
        </div>
      </AdmoContainer>
      <AdmoContainer>
        <AdmoPdfPreview :rows="rows" :invoice="invoice" />
        <AdmoButton class="m-8 bg-gray mx-auto" @click.native="addRow" text="Create PDF" button-type="button" />
      </AdmoContainer>
    </AdmoPanel>
    <AdmoOverlay v-if="isActive">
      <AdmoFormContactCreate @reload-data="reloadData('invoices')" />
    </AdmoOverlay>
    <AdmoNotification v-if="success" :text="`Rechnung ${invoice.generalInformation.invoiceNumber} wurde erfolgreich erstellt. PDF: ${downloadLink}`" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import hasOverlayMixin from "@/pages/hasOverlayMixin"
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoOverlay from "@/components/molecules/overlays/AdmoOverlay";
import AdmoTableHead from "@/components/molecules/tables/AdmoTableHead";
import AdmoTableRow from "@/components/molecules/tables/AdmoTableRow";
import AdmoFormContactCreate from "@/components/molecules/forms/AdmoFormContactCreate";
import AdmoPdfPreview from "@/components/organisms/pdf_preview/AdmoPdfPreview";
import AdmoBox from "@/components/molecules/boxes/AdmoBox";
import AdmoInput from "@/components/atoms/AdmoInput";
import AdmoTableCell from "@/components/molecules/tables/AdmoTableCell";
import AdmoTextEditable from "@/components/atoms/AdmoTextEditable";
import AdmoNotification from "@/components/molecules/notifications/AdmoNotification";
export default {
  components: {
    AdmoNotification,
    AdmoTextEditable,
    AdmoTableCell,
    AdmoInput,
    AdmoBox,
    AdmoPdfPreview, AdmoTableRow, AdmoTableHead, AdmoOverlay, AdmoButton, AdmoHeadline, AdmoContainer, AdmoPanel, AdmoFormContactCreate },
  mixins: [hasOverlayMixin],
  computed: {
    ...mapState('data/clients.store', ['clients'])
  },
  data(){
    return {
      headCells: ['Position', 'Beschreibung', 'Satz', 'Menge', 'Gesamt'],
      invoice: {
        generalInformation: {
          client: null,
          invoiceTitel: null,
          invoiceNumber: null,
          invoiceDate: null,
          moreValueTaxIdOfClient: null
        }
      },
      rows: [
        {
          position: 1,
          description: 'Test',
          price:  '60.00',
          quantity: '4',
          total:  '240.00'
        },
        {
          position: 2,
          description: 'Test',
          price:  '60.00',
          quantity: '4',
          total:  '240.00'
        }
      ],
      success: false,
      download: null,
      downloadLink: null,
    }
  },
  methods: {
    addRow(){
      const length = this.rows.length
      this.rows.push({ position: length + 1})
    },
    updateValue(el){
      console.log(el)
    },
    showPreview(){
      console.log('test')
    },
    setClient(e){
      console.log(e.target.value)
      this.invoice.generalInformation.client = e.target.value
    },
    showSuccessMessage(pdf){
      this.success = true
      this.download = pdf.data.Key
      setTimeout(() => {
        this.success = false
      }, 5000)
    },
    async saveInvoice(){
      const invoice = {
        nr: this.invoice.generalInformation.invoiceNumber,
        client: this.invoice.generalInformation.client,
        title: this.invoice.generalInformation.invoiceTitel,
        date: this.invoice.generalInformation.invoiceDate,
        dateRangeStart: null,
        dateRangeEnd: null,
        status: "pending",
        items: JSON.stringify(this.rows)
      }

      const result = await this.$axios.$post('/api/v1/invoices', invoice)
      console.log(result)
      if(result.pdf?.error === null) {
        this.showSuccessMessage(result.pdf)
      }
      if(result.pdfLink) {
        this.downloadLink = result.pdfLink.publicURL
      }
      console.log('result', result)
      if(result.status === 201) {
        console.log('IT WORKED')
      }

    },
    async createPDF(){

    }
  },
  async asyncData({ $axios, store }){
    if(store.state["data/clients.store/clients"]?.length === 0 || store.state["data/clients.store/clients"] === undefined) {
      const clients = await $axios.$get('/api/v1/clients')
      if(clients.length > 0) {
        store.dispatch('data/clients.store/setClients', clients)
      }
      return { clients }
    }
  }
}
</script>
