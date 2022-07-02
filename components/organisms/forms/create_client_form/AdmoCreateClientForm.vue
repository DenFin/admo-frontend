<template>
  <form @submit.prevent="createContact($event)">
    <div>
      <AdmoHeadline class="mb-8" headline-type="h2" text="Create a new client" />
    </div>
    <div class="mb-3">
      <AdmoLabel :for-attr="company" text="Company name"/>
      <AdmoInput class="w-full" v-model="client.company" input-type="text" placeholder="Enter a company name" />
    </div>
    <div class="mb-3">
      <AdmoLabel :for-attr="dob" text="Street"/>
      <AdmoInput class="w-full" v-model="client.street" input-type="text" placeholder="Enter address street" />
    </div>
    <div class="mb-3">
      <AdmoLabel :for-attr="dob" text="City"/>
      <AdmoInput class="w-full" v-model="client.city" input-type="text" placeholder="Enter city" />
    </div>
    <div class="mb-3">
      <AdmoLabel :for-attr="dob" text="ZIP"/>
      <AdmoInput class="w-full" v-model="client.zip" input-type="text" placeholder="EnterZIP Code" />
    </div>
    <div>
      <AdmoButton button-type="submit" text="Create new client"></AdmoButton>
    </div>
  </form>
</template>

<script>
import AdmoButton from "~/components/atoms/AdmoButton";
import AdmoInput from "~/components/atoms/AdmoInput";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoLabel from "@/components/atoms/AdmoLabel";

export default {
  components: {
    AdmoLabel,
    AdmoHeadline,
    AdmoButton,
    AdmoInput
  },
  data(){
    return {
      statusCode: null,
      client: {
        company: '',
        street: '',
        city: '',
        zip: ''
      }
    }
  },
  methods: {
    showErrorMessage(statusCode) {
      if(statusCode === '409') console.log('409!!!!!')
    },
    async createContact($event) {
      let result
      console.log($event)
      try {
        result = await this.$axios.post('http://localhost:8080/api/v1/clients', this.client)
        console.log('result', result)
        if(result.status === 201) {
          this.statusCode = 201
          this.$emit('reload-data')
          this.$store.dispatch('ui/overlay.store/setActive', false)
        }
      } catch(error) {
        switch(error.response.status) {
          case 409:
            this.showErrorMessage('409')
            break;
        }
        console.log(error.response)
        console.log(error)
      }
      console.log(result)
    }
  }
}
</script>
