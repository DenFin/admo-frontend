<template>
  <form @submit.prevent="submitForm($event)">
    <div>
      <h1 class="text-4xl font-bold mb-4">Register to Admo App</h1>
    </div>
    <div>
      <div v-if="errorStatusCode === 409">A user with this e-Mail already exists!</div>
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
      <AdmoButton button-type="submit" text="Create account"></AdmoButton>
    </div>
  </form>
</template>

<script>
import AdmoButton from "~/components/atoms/AdmoButton";
import AdmoInput from "~/components/atoms/AdmoInput";

export default {
  components: {
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
      },
      errorStatusCode: null,
    }
  },
  methods: {
    showErrorMessage(statusCode) {
      if(statusCode === '409') this.errorStatusCode = 409
    },
    showSuccessMessageAndRedirectToLogin(){
      this.$emit('register-succesful')
      this.$router.push('/auth/login')
    },
    async submitForm($event) {
      let result
      try {
        result = await this.$axios.post('http://localhost:8080/api/v1/auth/register', this.formData)
      } catch(error) {
        switch(error.response.status) {
          case 409:
            this.showErrorMessage('409')
            break;
        }
        console.log(error.response)
        console.log(error)
      }
      if(result?.status === 200) {
        this.showSuccessMessageAndRedirectToLogin()
      }
    }
  }
}
</script>
