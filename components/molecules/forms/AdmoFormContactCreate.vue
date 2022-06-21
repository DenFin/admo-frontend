<template>
  <form @submit.prevent="submitForm($event)">
    <div>
      <AdmoHeadline headline-type="h2" text="Register to Admo App" />
    </div>
    <div>
      <AdmoInput v-model="formData.email" input-type="email" placeholder="Your e-Mail address" />
    </div>
    <div>
      <AdmoInput v-model="formData.username" input-type="text" placeholder="Your username" />
    </div>
    <div>
      <AdmoInput v-model="formData.password" input-type="password" placeholder="Your password" />
    </div>
    <div>
      <AdmoInput v-model="formData.confirmPassword" input-type="password" placeholder="Confirm password" />
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
      formData: {
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
      }
    }
  },
  methods: {
    showErrorMessage(statusCode) {
      if(statusCode === '409') console.log('409!!!!!')
    },
    async submitForm($event) {
      let result
      console.log($event)
      try {
        result = await this.$axios.post('http://localhost:8080/api/v1/auth/register', this.formData)
        console.log('result', result)
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
