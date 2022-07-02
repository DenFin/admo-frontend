<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="w-full inline-flex justify-between">
          <AdmoHeadline headline-type="h1" text="Invoices" />
          <div class="flex">
            <AdmoButton @click.native="openOverlay" class="w-auto self-start mr-4" button-type="button" text="Create new invoice" />
            <AdmoButton @click.native="showPreview" class="w-auto self-start" button-type="button" text="Show preview" />
          </div>
        </div>
      </AdmoContainer>
      <AdmoContainer>
        <AdmoBox class="mb-8">
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Kunde</label>
            <select class="block p-4 w-1/2" name="" id="">
              <option v-for="client in clients" :key="client._id" :value="client.company">{{ client.company }}</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Rechnungstitel</label>
            <AdmoInput v-model="invoice.generalInformation.invoiceTitel" class="w-1/2" />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Rechnungsnummer</label>
            <AdmoInput class="w-1/2" />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="">Ust.-Id. vom Kunden</label>
            <AdmoInput class="w-1/2" />
          </div>
        </AdmoBox>
      </AdmoContainer>
      <AdmoContainer>
        <AdmoTableHead />
        <AdmoTableRow v-for="row in rows" :key="row.position" :row="row" />
        <div class="flex">
          <AdmoButton class="mt-4 mr-4" @click.native="addRow" text="Add row" button-type="button" />
          <AdmoButton class="mt-4 bg-gray" @click.native="addRow" text="Add sub row" button-type="button" />
        </div>
      </AdmoContainer>
    </AdmoPanel>
    <AdmoOverlay v-if="isActive">
      <AdmoFormContactCreate @reload-data="reloadData('invoices')" />
    </AdmoOverlay>
    <AdmoPdfPreview :rows="rows" :invoice="invoice" />
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
export default {
  components: {
    AdmoInput,
    AdmoBox,
    AdmoPdfPreview, AdmoTableRow, AdmoTableHead, AdmoOverlay, AdmoButton, AdmoHeadline, AdmoContainer, AdmoPanel, AdmoFormContactCreate},
  mixins: [hasOverlayMixin],
  computed: {
    ...mapState('data/clients.store', ['clients'])
  },
  data(){
    return {
      invoice: {
        generalInformation: {
          client: null,
          invoiceTitel: null,
          invoiceNumber: null,
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
      ]
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
    }
  }
}
</script>
