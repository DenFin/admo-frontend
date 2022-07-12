<template>
 <div>
   <AdmoPanel>
     <AdmoContainer>
       <div class="w-full inline-flex justify-between">
         <AdmoHeadline headline-type="h1" text="Contacts" />
         <AdmoButton @click.native="openOverlay" class="w-auto self-start" button-type="button" button-classes="border-2 border-black text-black font-bold" text="Create new contact" />
       </div>
       <section class="py-5">
         <AdmoTableContacts :contacts="contactsSorted" @reload-data="reloadData('contacts')" @open-overlay-edit="openOverlay($event)" />
       </section>
     </AdmoContainer>
   </AdmoPanel>
   <AdmoOverlay v-if="isActive || deleteWarning">
     <AdmoFormContactCreate v-if="isActive" @reload-data="reloadData('contacts')" />
     <AdmoOverlayConfirmDelete v-if="deleteWarning" @reload-data="reloadData('contacts')" />
   </AdmoOverlay>
 </div>
</template>
<script>
import {mapState} from "vuex";
import hasOverlayMixin from "@/mixins/overlay/hasOverlayMixin"
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoFormContactCreate from "@/components/molecules/forms/AdmoFormContactCreate";
import AdmoTableContacts from "@/components/molecules/tables/AdmoTableContacts";
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoOverlay from "@/components/molecules/overlays/AdmoOverlay";
import isEmptyObject from "@/modules/helpers/isEmptyObject";
import AdmoOverlayConfirmDelete from "@/components/molecules/overlays/AdmoOverlayConfirmDelete";

export default {
  components: {AdmoOverlayConfirmDelete, AdmoOverlay, AdmoPanel, AdmoFormContactCreate, AdmoHeadline, AdmoContainer, AdmoButton, AdmoTableContacts },
  mixins: [hasOverlayMixin],
  computed: {
    ...mapState('ui/overlay.store', ['deleteWarning']),
    contactsSorted(){
      const contactsSorted = this.contacts
      return contactsSorted.sort((a,b) => {
        return a.lastname.localeCompare(b.lastname)
      })
    }
  },
  async asyncData({ $axios }) {
    const contacts = await $axios.$get('/api/v1/contacts')
    return { contacts }
  },
  mounted(){
    if(!isEmptyObject(this.$route.query)) this.$store.dispatch('ui/overlay.store/setActive', true)
  }
}
</script>
