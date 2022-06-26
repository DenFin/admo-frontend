<template>
  <div class="admo-table">
    <div class="admo-table-head">
      <div class="flex border-b py-2">
        <div class="w-1/4"><span class="font-bold">Firstname</span></div>
        <div class="w-1/4"><span class="font-bold">Lastname</span></div>
        <div class="w-1/4"><span class="font-bold">ID</span></div>
        <div class="w-1/4"><span class="font-bold">Actions</span></div>
      </div>
    </div>
    <div class="admo-table-row py-2 mb-2 border-b" v-for="contact in contacts" :key="contact.name">
      <div class="flex">
        <div class="w-1/4">{{ contact.firstname }}</div>
        <div class="w-1/4">{{ contact.lastname }}</div>
        <div class="w-1/4">{{ contact._id }}</div>
        <div class="w-1/4">
          <div class="flex">
            <AdmoButton button-type="button" :button-classes="'bg-gray-600 mr-2'"  @click.native="editContact(contact._id)" is-small text="Edit"/>
            <AdmoButton button-type="button" :button-classes="'bg-red-600'" @click.native="deleteContact(contact._id)" is-small text="Delete"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdmoButton from "@/components/atoms/AdmoButton";
export default {
  components: {AdmoButton},
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
    async deleteContact(id){
      const result = await this.$axios.delete(`/api/v1/contacts/${id}`)
      if(result.status === 204) {
        this.$emit('reload-data')
      }
    }
  }
}
</script>
