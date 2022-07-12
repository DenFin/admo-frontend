<template>
  <div class="rounded overflow-hidden">
    <div class="bg-white border-t-4 border-red-500 p-12 max-w-2xl relative">
      <h1 class="text-3xl font-bold text-center mb-4">Kontakt löschen?</h1>
      <p class="text-center text-gray-600 mb-16 px-8">Bist du sicher, dass du den Kontakt {{ deleteItemId }} löschen möchtest?</p>
      <div class="text-center flex justify-center">
        <AdmoButton @click.native="closeOverlay()" class="mr-3" button-type="button" button-classes="w-full border-2 border-gray-600 text-gray-600" text="Cancel"></AdmoButton>
        <AdmoButton @click.native="deleteContact()" button-type="button" button-classes="bg-red-500 text-white w-full" text="Delete"></AdmoButton>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import deleteContactById from '~/mixins/contacts/deleteContactById'
import closeOverlay from "@/mixins/overlay/closeOverlay";
import AdmoButton from "@/components/atoms/AdmoButton";
export default {
  components: { AdmoButton },
  mixins: [deleteContactById, closeOverlay],
  computed: {
    ...mapState('ui/overlay.store', ['deleteItemId'])
  }
}
</script>
