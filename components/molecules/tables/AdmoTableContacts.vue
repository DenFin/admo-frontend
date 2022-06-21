<template>
  <div class="admo-table">
    <div class="admo-table-head">
      <div class="flex">
        <div class="w-1/3"><span>Name</span></div>
        <div class="w-1/3"><span>DOB</span></div>
        <div class="w-1/3"><span>Street</span></div>
      </div>
    </div>
    <div class="admo-table-row py-2 mb-2 border-b" v-for="contact in contacts" :key="contact.name">
      <div class="flex">
        <div class="w-1/3">{{ contact.name }}</div>
        <div class="w-1/3">{{ contact.dob }}</div>
        <div class="w-1/3">{{ contact.street }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      contacts: [
        {
          name: 'Otto',
          dob: 'DD-MM-JJJJ',
          street: 'Street Name XY'
        },
        {
          name: 'Otto2',
          dob: 'DD-MM-JJJJ',
          street: 'Street Name XY'
        },
        {
          name: 'Otto3',
          dob: 'DD-MM-JJJJ',
          street: 'Street Name XY'
        },
        {
          name: 'Otto4',
          dob: 'DD-MM-JJJJ',
          street: 'Street Name XY'
        },
        {
          name: 'Otto5',
          dob: 'DD-MM-JJJJ',
          street: 'Street Name XY'
        }

      ]
    }
  }
}
</script>
