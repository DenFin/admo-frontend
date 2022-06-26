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
          <div @click="deleteContact(contact._id)" class="cursor-pointer h-8 shadow-md inline-block px-2 font-bold">Delete</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
  methods: {
    async deleteContact(id){
      const result = await this.$axios.delete(`http://localhost:8080/api/v1/contacts/${id}`)
      if(result.status === 204) {
        this.$emit('reload-data')
      }
    }
  }
}
</script>
