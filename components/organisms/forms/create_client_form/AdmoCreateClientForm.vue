<template>
  <form @submit.prevent="createContact($event)">
    <div>
      <AdmoHeadline
        class="mb-8"
        headline-type="h2"
        text="Create a new client"
      />
    </div>
    <div class="mb-3">
      <AdmoLabel text="Company name" />
      <AdmoInput
        v-model="client.company"
        class="w-full"
        input-type="text"
        placeholder="Enter a company name"
      />
    </div>
    <div class="mb-3">
      <AdmoLabel text="Street" />
      <AdmoInput
        v-model="client.street"
        class="w-full"
        input-type="text"
        placeholder="Enter address street"
      />
    </div>
    <div class="mb-3">
      <AdmoLabel text="City" />
      <AdmoInput
        v-model="client.city"
        class="w-full"
        input-type="text"
        placeholder="Enter city"
      />
    </div>
    <div class="mb-3">
      <AdmoLabel text="ZIP" />
      <AdmoInput
        v-model="client.zip"
        class="w-full"
        input-type="text"
        placeholder="EnterZIP Code"
      />
    </div>
    <div>
      <AdmoButton button-type="submit" text="Create new client"></AdmoButton>
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
      client: {
        company: '',
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
          'http://localhost:8080/api/v1/clients',
          this.client
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
