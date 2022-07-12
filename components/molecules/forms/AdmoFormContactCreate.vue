<template>
  <form @submit.prevent="createContact($event)">
    <div>
      <AdmoHeadline
        class="mb-8"
        headline-type="h2"
        text="Create a new contact"
      />
    </div>
    <div class="mb-3">
      <AdmoLabel :for-attr="firstname" text="Firstname" />
      <AdmoInput
        v-model="contact.firstname"
        class="w-full"
        input-type="text"
        placeholder="Enter a firstname"
      />
    </div>
    <div class="mb-3">
      <AdmoLabel :for-attr="lastname" text="Lastname" />
      <AdmoInput
        v-model="contact.lastname"
        class="w-full"
        input-type="text"
        placeholder="Enter a lastname"
      />
    </div>
    <div class="mb-3">
      <AdmoLabel :for-attr="dob" text="Date of birth" />
      <AdmoInput
        v-model="contact.dob"
        class="w-full"
        input-type="date"
        placeholder="Select a date of birth"
      />
    </div>
    <div class="mb-3">
      <AdmoLabel :for-attr="dob" text="Street" />
      <AdmoInput
        v-model="contact.street"
        class="w-full"
        input-type="text"
        placeholder="Enter you address street"
      />
    </div>
    <div class="mb-3">
      <AdmoLabel :for-attr="dob" text="City" />
      <AdmoInput
        v-model="contact.city"
        class="w-full"
        input-type="text"
        placeholder="Enter your city"
      />
    </div>
    <div class="mb-3">
      <AdmoLabel :for-attr="dob" text="ZIP" />
      <AdmoInput
        v-model="contact.zip"
        class="w-full"
        input-type="text"
        placeholder="Enter your ZIP Code"
      />
    </div>
    <div>
      <AdmoButton button-type="submit" text="Create new contact"></AdmoButton>
    </div>
  </form>
</template>

<script>
import AdmoButton from '~/components/atoms/AdmoButton'
import AdmoInput from '~/components/atoms/AdmoInput'
import AdmoHeadline from '@/components/atoms/AdmoHeadline'
import AdmoLabel from '@/components/atoms/AdmoLabel'

export default {
  components: {
    AdmoLabel,
    AdmoHeadline,
    AdmoButton,
    AdmoInput,
  },
  data() {
    return {
      statusCode: null,
      contact: {
        firstname: '',
        lastname: '',
        dob: null,
        street: '',
        city: '',
        zip: '',
      },
    }
  },
  methods: {
    showErrorMessage(statusCode) {
      if (statusCode === '409') console.log('409!!!!!')
    },
    async createContact($event) {
      let result
      console.log($event)
      try {
        result = await this.$axios.post(
          'http://localhost:8080/api/v1/contacts',
          this.contact
        )
        console.log('result', result)
        if (result.status === 201) {
          this.statusCode = 201
          this.$emit('reload-data')
          this.$store.dispatch('ui/overlay.store/setActive', false)
        }
      } catch (error) {
        switch (error.response.status) {
          case 409:
            this.showErrorMessage('409')
            break
        }
        console.log(error.response)
        console.log(error)
      }
      console.log(result)
    },
  },
}
</script>
