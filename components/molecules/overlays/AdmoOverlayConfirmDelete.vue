<template>
  <div class="rounded overflow-hidden mx-auto">
    <div class="bg-white border-t-4 border-red-500 p-12 relative">
      <h1 class="text-3xl font-bold text-center mb-4">{{ contentType }} löschen?</h1>
      <p class="text-center text-gray-600 mb-16 px-8">
        Bist du sicher, dass du den {{ contentType }} {{ deleteItemId }} löschen möchtest?
      </p>
      <div class="text-center flex justify-center">
        <AdmoButton
          class="mr-3"
          button-type="button"
          button-classes="w-full border-2 border-gray-600 text-gray-600"
          text="Cancel"
          @click.native="closeOverlay()"
        ></AdmoButton>
        <AdmoButton
          button-type="button"
          button-classes="bg-red-500 text-white w-full"
          text="Delete"
          @click.native="deleteContact()"
        ></AdmoButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import deleteContactById from '~/mixins/contacts/deleteContactById'
import closeOverlay from '@/mixins/overlay/closeOverlay'
import AdmoButton from '@/components/atoms/AdmoButton'
export default {
  components: { AdmoButton },
  mixins: [deleteContactById, closeOverlay],
  props: {
    contentType: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapState('ui/overlay.store', ['deleteItemId']),

  },
}
</script>
