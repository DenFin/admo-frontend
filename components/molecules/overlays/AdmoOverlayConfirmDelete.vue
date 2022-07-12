<template>
  <div>
    <h1 class="text-3xl font-bold text-center mb-1">Kontakt löschen?</h1>
    <p class="text-center mb-5">Bist du sicher, dass du den Kontakt {{  }} löschen möchtest?</p>
    <div class="text-center flex justify-center">
      <AdmoButton @click.native="closeOverlay()" class="mr-3" button-type="button" text="Cancel"></AdmoButton>
      <AdmoButton @click.native="deleteContact()" button-type="button" text="Delete"></AdmoButton>
    </div>
  </div>
</template>

<script>
import deleteContactById from '~/mixins/contacts/deleteContactById'
import closeOverlay from "@/mixins/overlay/closeOverlay";
import AdmoButton from "@/components/atoms/AdmoButton";
export default {
  components: { AdmoButton },
  mixins: [deleteContactById, closeOverlay]
}
</script>
