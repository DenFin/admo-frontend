<template>
  <form @submit.prevent="createContact($event)">
    <div>
      <AdmoHeadline class="mb-8" headline-type="h2" text="Create a new contact" />
    </div>
    <div>
      <AdmoInput v-model="contact.firstname" input-type="text" placeholder="Enter a firstname" />
    </div>
    <div>
      <AdmoInput v-model="contact.lastname" input-type="text" placeholder="Enter a lastname" />
    </div>
    <div>
      <AdmoInput v-model="contact.dob" input-type="date" placeholder="Select a date of birth" />
    </div>
    <div>
      <AdmoButton button-type="submit" text="Create new contact"></AdmoButton>
    </div>
  </form>
</template>

<script>
import AdmoButton from "~/components/atoms/AdmoButton";
import AdmoInput from "~/components/atoms/AdmoInput";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";

export default {
  components: {
    AdmoHeadline,
    AdmoButton,
    AdmoInput
  },
  data(){
    return {
      statusCode: null,
      contact: {
        firstname: '',
        lastname: '',
        dob: null
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
        result = await this.$axios.post('http://localhost:8080/api/v1/contacts', this.contact)
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
