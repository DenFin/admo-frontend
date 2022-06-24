<template>
  <form @submit.prevent="login">
    <div>
      <h1 class="text-4xl font-bold mb-4">Log in to Admo App</h1>
    </div>
    <div>
      <AdmoInput v-model="loginData.email" input-type="email" placeholder="Your e-Mail address" />
    </div>
    <div>
      <AdmoInput v-model="loginData.password" input-type="password" placeholder="Your password" />
    </div>
    <div>
      <AdmoButton button-type="submit" text="Login"></AdmoButton>
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
      loginData: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      let response;
      try {
        response = await this.$auth.loginWith("local", {
          data: this.loginData
        });
      } catch (err) {
        console.log(err);
        console.log({response});
      }
      this.$router.push("../dashboard");
    }
  }
}
</script>
