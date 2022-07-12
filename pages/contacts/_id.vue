<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline
        headline-type="h1"
        :text="`${contact.firstname} ${contact.lastname}`"
      ></AdmoHeadline>
      <AdmoBox>
        <span class="font-bold">Geburtstag:</span><br />
        <span>{{ getFormattedDate(contact.dob) }}</span>
      </AdmoBox>
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import AdmoPanel from '@/components/layout/AdmoPanel'
import AdmoContainer from '@/components/layout/AdmoContainer'
import AdmoHeadline from '@/components/atoms/AdmoHeadline'
import dateHelperMixin from '@/mixins/dateHelperMixin'
import AdmoBox from '@/components/molecules/boxes/AdmoBox'

export default {
  components: { AdmoBox, AdmoHeadline, AdmoContainer, AdmoPanel },
  mixins: [dateHelperMixin],
  async asyncData({ params, $axios }) {
    const id = params.id
    const { data } = await $axios.get(`/api/v1/contacts/${id}`)
    const contact = data
    console.log('context', id, data)
    return { contact }
  },
}
</script>
