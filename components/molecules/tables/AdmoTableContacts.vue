<template>
  <div class="admo-table">
    <div class="admo-table-head">
      <div class="grid grid-cols-7 border-b py-2">
        <div><span class="font-bold">ID</span></div>
        <div><span class="font-bold">Firstname</span></div>
        <div><span class="font-bold">Lastname</span></div>
        <div><span class="font-bold">Street</span></div>
        <div><span class="font-bold">City</span></div>
        <div><span class="font-bold">ZIP</span></div>
        <div><span class="font-bold">Actions</span></div>
      </div>
    </div>
    <div class="admo-table-row py-2 mb-2 border-b" v-for="contact in contacts" :key="contact.name">

        <div class="grid grid-cols-7">
          <div class="pr-4 overflow-hidden overflow-ellipsis space-nowrap">
            <nuxt-link :to="{ path: `contacts/${contact._id}`}">
              {{ contact._id }}
            </nuxt-link>
          </div>
          <div class="">{{ contact.firstname }}</div>
          <div class="">{{ contact.lastname }}</div>
          <div>{{ contact.street }}</div>
          <div>{{ contact.city }}</div>
          <div>{{ contact.zip }}</div>
          <div class="">
            <div class="flex">
              <AdmoButton button-type="button" :button-classes="'bg-gray-600 mr-2'"  @click.stop.native="editContact(contact._id)" is-small text="Edit"/>
              <AdmoButton button-type="button" :button-classes="'bg-red-600 mr-2'" @click.stop.native="deleteContact(contact._id)" is-small text="Delete"/>
              <AdmoButton button-type="button" :button-classes="'bg-gray-600'" text="Duplicate"  is-small />
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import AdmoButton from "@/components/atoms/AdmoButton";
import deleteContactById from '~/mixins/contacts/deleteContactById'

export default {
  components: { AdmoButton },
  mixins: [deleteContactById],
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      contactEdited: {}
    }
  },
  methods: {
    editContact(id) {
      this.$router.replace({path: '/contacts', query: { id }})
      this.$emit('open-overlay-edit', id)
    },

  }
}
</script>
