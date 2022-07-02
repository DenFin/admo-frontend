<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="w-full inline-flex justify-between">
          <AdmoHeadline headline-type="h1" text="Proposals" />
          <AdmoButton @click.native="openOverlay" class="w-auto self-start" button-type="button" text="Create new proposal" />
        </div>
      </AdmoContainer>
    </AdmoPanel>
    <AdmoOverlay v-if="isActive">
      <AdmoFormContactCreate @reload-data="reloadData('proposals')" />
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
}
</script>
