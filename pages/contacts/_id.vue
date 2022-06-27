<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline headline-type="h1" :text="`${contact.firstname} ${contact.lastname}`"></AdmoHeadline>
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";

export default {
  components: { AdmoHeadline, AdmoContainer, AdmoPanel },
  async asyncData({ params, $axios }) {
    const id = params.id
    const { data } = await $axios.get(`/api/v1/contacts/${id}`)
    const contact = data
    console.log('context', id, data)
    return { contact }
  }
}
</script>
