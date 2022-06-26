<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline headline-type="h1" text="Settings" />
      <div class="bg-gray-100 border border-gray-200 p-8 rounded-lg w-auto lg:w-1/2">
        <AdmoHeadline class="mb-4" headline-type="h2" text="General information" />
        <div class="mb-4">
          <span class="font-bold block">Business name</span>
          <div class="flex">
            <AdmoInput class="inline-block w-auto mb-0" type="text" :value="generalInformation.generalInformation" />
            <AdmoButton class="inline-block" text="Save" is-small />
          </div>
        </div>
        <div class="mb-4">
          <span class="font-bold block">Address</span>
          <div class="flex">
            <AdmoInput class="inline-block w-auto mb-0" type="text" value="untype" />
            <AdmoButton class="inline-block" text="Save" is-small />
          </div>
        </div>
        <div class="mb-4">
          <span class="font-bold block">City</span>
          <div class="flex">
            <AdmoInput class="inline-block w-auto mb-0" type="text" value="untype" />
            <AdmoButton class="inline-block" text="Save" is-small />
          </div>
        </div>
        <div class="mb-4">
          <span class="font-bold block">ZIP</span>
          <div class="flex">
            <AdmoInput class="inline-block w-auto mb-0" type="text" value="untype" />
            <AdmoButton class="inline-block" text="Save" is-small />
          </div>
        </div>
        <div class="mb-4">
          <span class="font-bold block">Steuernummer</span>
          <div class="flex">
            <AdmoInput class="inline-block w-auto mb-0" type="text" value="untype" />
            <AdmoButton class="inline-block" text="Save" is-small />
          </div>
        </div>
        <div>
          <span class="font-bold block">Umsatzsteuer-ID</span>
          <div class="flex">
            <AdmoInput class="inline-block w-auto mb-0" type="text" value="untype" />
            <AdmoButton class="inline-block" text="Save" is-small />
          </div>
        </div>
      </div>
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoInput from "@/components/atoms/AdmoInput";
import AdmoButton from "@/components/atoms/AdmoButton";
export default {
  components: { AdmoButton, AdmoInput, AdmoHeadline, AdmoContainer, AdmoPanel },
  methods: {
    async updateGeneralInformation(id){
      const result = await this.$axios.patch(`/api/v1/settings/general-information/${id}`)
      return result
    }
  },
  async asyncData({ $axios}) {
    const { data } = await $axios('/api/v1/settings/general-information')
    const generalInformation = data[0]
    return { generalInformation }
  }
}
</script>
