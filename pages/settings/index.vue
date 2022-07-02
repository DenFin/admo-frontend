<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline headline-type="h1" text="Settings" />
        <AdmoBox>
          <AdmoHeadline class="mb-4" headline-type="h2" text="General information" />
          <div class="mb-4 w-1/2">
            <span class="font-bold block">Business name</span>
            <div class="flex w-full">
              <AdmoInput class="inline-block w-full mb-0" type="text" :value="generalInformation.generalInformation" />
              <AdmoButton class="inline-block" text="Save" is-small />
            </div>
          </div>
          <div class="mb-4 w-1/2">
            <span class="font-bold block">Address</span>
            <div class="flex">
              <AdmoInput class="inline-block w-full mb-0" type="text" value="untype" />
              <AdmoButton class="inline-block" text="Save" is-small />
            </div>
          </div>
          <div class="mb-4 w-1/2">
            <span class="font-bold block">City</span>
            <div class="flex">
              <AdmoInput class="inline-block w-full mb-0" type="text" value="untype" />
              <AdmoButton class="inline-block" text="Save" is-small />
            </div>
          </div>
          <div class="mb-4 w-1/2">
            <span class="font-bold block">ZIP</span>
            <div class="flex">
              <AdmoInput class="inline-block w-full mb-0" type="text" value="untype" />
              <AdmoButton class="inline-block" text="Save" is-small />
            </div>
          </div>
          <div class="mb-4 w-1/2">
            <span class="font-bold block">Steuernummer</span>
            <div class="flex">
              <AdmoInput class="inline-block w-full mb-0" type="text" value="untype" />
              <AdmoButton class="inline-block" text="Save" is-small />
            </div>
          </div>
          <div class="w-01/2">
            <span class="font-bold block">Umsatzsteuer-ID</span>
            <div class="flex">
              <AdmoInput class="inline-block w-full mb-0" type="text" value="untype" />
              <AdmoButton class="inline-block" text="Save" is-small />
            </div>
          </div>
        </AdmoBox>
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoInput from "@/components/atoms/AdmoInput";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoBox from "@/components/molecules/boxes/AdmoBox";
export default {
  components: {AdmoBox, AdmoButton, AdmoInput, AdmoHeadline, AdmoContainer, AdmoPanel },
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
