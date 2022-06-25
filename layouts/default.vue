<template>
  <div>
    <AdmoHeader />
    <Nuxt />
  </div>
</template>
<script>
import AdmoHeader from "@/components/layout/AdmoHeader";
export default {
  components: {AdmoHeader},
  mounted(){
    console.log(this.$auth)
  }
}
</script>
