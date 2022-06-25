<template>
 <div>
   <AdmoPanel>
     <AdmoContainer>
       <div class="w-full inline-flex justify-between">
         <AdmoHeadline headline-type="h1" text="Contacts" />
         <AdmoButton @click.native="openOverlay" class="w-auto self-start" button-type="button" text="Create new contact" />
       </div>
       <section class="py-5">
         <AdmoTableContacts />
       </section>
       <section>

       </section>
     </AdmoContainer>
   </AdmoPanel>
   <AdmoOverlay v-if="isActive">
     <AdmoFormContactCreate />
   </AdmoOverlay>
 </div>
</template>
<script>
import { mapState } from "vuex"
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoFormContactCreate from "@/components/molecules/forms/AdmoFormContactCreate";
import AdmoTableContacts from "@/components/molecules/tables/AdmoTableContacts";
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoOverlay from "@/components/molecules/overlays/AdmoOverlay";

export default {
  components: { AdmoOverlay, AdmoPanel, AdmoFormContactCreate, AdmoHeadline, AdmoContainer, AdmoButton, AdmoTableContacts },
  computed: {
    ...mapState('ui/overlay.store', ['isActive'])
  },
  methods: {
    openOverlay(){
      this.$store.dispatch('ui/overlay.store/setActive')
    }
  }
}
</script>
