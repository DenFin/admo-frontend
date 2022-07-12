<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="w-full inline-flex justify-between">
          <AdmoHeadline headline-type="h1" text="Contacts edit" />
          <AdmoButton @click.native="openOverlay" class="w-auto self-start" button-type="button" text="Create new contact" />
        </div>
        <section class="py-5">
          <AdmoTableContacts :contacts="contacts" @reload-data="reloadData('contacts')" />
        </section>
      </AdmoContainer>
    </AdmoPanel>
    <AdmoOverlay v-if="isActive">
      <AdmoFormContactCreate @reload-data="reloadData('contacts')" />
    </AdmoOverlay>
  </div>
</template>
<script>
import hasOverlayMixin from "@/mixins/overlay/hasOverlayMixin"
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoFormContactCreate from "@/components/molecules/forms/AdmoFormContactCreate";
import AdmoTableContacts from "@/components/molecules/tables/AdmoTableContacts";
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoOverlay from "@/components/molecules/overlays/AdmoOverlay";

export default {
  name: 'editContact',
  components: { AdmoOverlay, AdmoPanel, AdmoFormContactCreate, AdmoHeadline, AdmoContainer, AdmoButton, AdmoTableContacts },
  mixins: [hasOverlayMixin],
  async asyncData({ $axios }) {
    const contacts = await $axios.$get('/api/v1/contacts')
    return { contacts }
  }
}
</script>
