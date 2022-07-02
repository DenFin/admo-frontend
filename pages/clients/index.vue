<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="flex justify-between">
          <AdmoHeadline headline-type="h1" text="Clients"/>
          <AdmoButton @click.native="openOverlay" class="w-auto self-start" button-type="button" text="Create new client" />
        </div>
      </AdmoContainer>
    </AdmoPanel>
    <AdmoOverlay v-if="isActive">
      <AdmoCreateClientForm @reload-data="reloadData('clients')" />
    </AdmoOverlay>
  </div>
</template>
<script>
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoOverlay from "@/components/molecules/overlays/AdmoOverlay";
import hasOverlayMixin from "@/pages/hasOverlayMixin";
import AdmoCreateClientForm from "@/components/organisms/forms/create_client_form/AdmoCreateClientForm";
export default {
  components: {AdmoCreateClientForm, AdmoOverlay, AdmoButton, AdmoHeadline, AdmoContainer, AdmoPanel },
  mixins: [hasOverlayMixin],
  async asyncData({ $axios, store }) {
    const clients = await $axios.$get('/api/v1/clients')
    if(clients.length > 0) {
      store.dispatch('data/clients.store/setClients', clients)
    }
    return { clients }
  },
}
</script>
