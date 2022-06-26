<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="w-full inline-flex justify-between">
          <AdmoHeadline headline-type="h1" text="Invoices" />
          <AdmoButton @click.native="openOverlay" class="w-auto self-start" button-type="button" text="Create new invoice" />
        </div>
      </AdmoContainer>
      <AdmoContainer>
        <div class="border-b-2 py-2 flex">
          <div class="w-1/5"><span class="font-bold">Position</span></div>
          <div class="w-1/5"><span class="font-bold">Beschreibung</span></div>
          <div class="w-1/5"><span class="font-bold">Satz</span></div>
          <div class="w-1/5"><span class="font-bold">Menge</span></div>
          <div class="w-1/5"><span class="font-bold">Gesamt</span></div>
        </div>
        <div v-for="row in rows" :key="row.position" class="flex border-b py-2">
          <div class="w-1/5"><span class="font-bold">{{ row.position }}</span></div>
          <div class="w-1/5"><span class="font-bold">{{ row.description }}</span></div>
          <div class="w-1/5"><span class="font-bold">{{ row.price }}</span></div>
          <div class="w-1/5"><span class="font-bold">{{ row.quantity }}</span></div>
          <div class="w-1/5"><span class="font-bold">{{ row.total }}</span></div>
        </div>
        <AdmoButton class="mt-4" @click.native="addRow" text="Add row" button-type="button" />
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
export default {
  components: {AdmoOverlay, AdmoButton, AdmoHeadline, AdmoContainer, AdmoPanel},
  mixins: [hasOverlayMixin],
  data(){
    return {
      rows: [
        {
          position: 1,
          description: '',
          price:  null,
          quantity: null,
          total:  null
        }
      ]
    }
  },
  methods: {
    addRow(){
      const length = this.rows.length
      this.rows.push({ position: length + 1})
    }
  }
}
</script>
