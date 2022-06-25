<template>
  <div class="admo-table">
    <div class="admo-table-head">
      <div class="flex border-b py-2">
        <div class="w-1/3"><span class="font-bold">Firstname</span></div>
        <div class="w-1/3"><span class="font-bold">Lastname</span></div>
        <div class="w-1/3"><span class="font-bold">ID</span></div>
      </div>
    </div>
    <div class="admo-table-row py-2 mb-2 border-b" v-for="contact in contacts" :key="contact.name">
      <div class="flex">
        <div class="w-1/3">{{ contact.firstname }}</div>
        <div class="w-1/3">{{ contact.lastname }}</div>
        <div class="w-1/3">{{ contact._id }}</div>
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
}
</script>
