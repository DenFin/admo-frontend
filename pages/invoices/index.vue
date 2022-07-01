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
  </div>
</template>
<script>
import hasOverlayMixin from "@/pages/hasOverlayMixin"
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoOverlay from "@/components/molecules/overlays/AdmoOverlay";
import AdmoTableHead from "@/components/molecules/tables/AdmoTableHead";
import AdmoTableRow from "@/components/molecules/tables/AdmoTableRow";
import AdmoFormContactCreate from "@/components/molecules/forms/AdmoFormContactCreate";
export default {
  components: { AdmoTableRow, AdmoTableHead, AdmoOverlay, AdmoButton, AdmoHeadline, AdmoContainer, AdmoPanel, AdmoFormContactCreate},
  mixins: [hasOverlayMixin],
  data(){
    return {
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
    }
  }
}
</script>
