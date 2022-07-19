<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline
        headline-type="h1"
        :text="`${client.company}`"
      ></AdmoHeadline>
      <AdmoBox>
        <div class="mb-2">
          <span class="font-bold">Umsatzsteuer-ID</span>
        </div>
        <div class="flex w-full">
          <AdmoInput
            class="inline-block w-full mb-0"
            input-type="text"
            v-model="taxId"
          />
          <AdmoButton
            button-type="button"
            class="inline-block"
            text="Save"
            is-small
            @click.native="editClient()"
          />
        </div>
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
import AdmoInput from "@/components/atoms/AdmoInput";
import AdmoButton from "@/components/atoms/AdmoButton";

export default {
  components: {AdmoButton, AdmoInput, AdmoBox, AdmoHeadline, AdmoContainer, AdmoPanel },
  mixins: [dateHelperMixin],
  data(){
    return {
      taxId: null
    }
  },
  methods: {
    async editClient() {
      const id = this.$route.params.id
      const result = await this.$axios.patch(`/api/v1/clients/${id}`, { taxId: this.taxId })
      console.log('result', result)
    }
  },
  async asyncData({ params, $axios }) {
    const id = params.id
    const { data } = await $axios.get(`/api/v1/clients/${id}`)
    const client = data
    return { client }
  },
}
</script>
