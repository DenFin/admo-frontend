<template>
 <div>
   <AdmoPanel>
     <AdmoContainer>
       <div class="w-full inline-flex justify-between">
         <AdmoHeadline headline-type="h1" text="Contacts" />
         <AdmoButton @click.native="openOverlay" class="w-auto self-start" button-type="button" text="Create new contact" />
       </div>
       <section class="py-5">
         <AdmoTableContacts :contacts="contacts" @reload-data="reloadData('contacts')" @open-overlay-edit="openOverlay($event)" />
       </section>
     </AdmoContainer>
   </AdmoPanel>
   <AdmoOverlay v-if="isActive">
     <AdmoFormContactCreate @reload-data="reloadData('contacts')" />
   </AdmoOverlay>
 </div>
</template>
<script>
import hasOverlayMixin from "@/pages/hasOverlayMixin"
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoFormContactCreate from "@/components/molecules/forms/AdmoFormContactCreate";
import AdmoTableContacts from "@/components/molecules/tables/AdmoTableContacts";
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoOverlay from "@/components/molecules/overlays/AdmoOverlay";
import isEmptyObject from "@/modules/helpers/isEmptyObject";

export default {
  components: { AdmoOverlay, AdmoPanel, AdmoFormContactCreate, AdmoHeadline, AdmoContainer, AdmoButton, AdmoTableContacts },
  mixins: [hasOverlayMixin],
  async asyncData({ $axios }) {
    const contacts = await $axios.$get('/api/v1/contacts')
    return { contacts }
  },
  methods: {
    openOverlay($event){
      this.$store.dispatch('ui/overlay.store/setActive', true)
      console.log('open-overlay',$event)
    }
  },
  mounted(){
    if(!isEmptyObject(this.$route.query)) this.$store.dispatch('ui/overlay.store/setActive', true)
  }
}
</script>
