<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline headline-type="h1" text="Settings" />
        <AdmoBox>
          <AdmoHeadline class="mb-4" headline-type="h2" text="General information" />
          <div class="mb-4 w-1/2">
            <span class="font-bold block">Logo</span>
            <div class="flex w-full">
              <AdmoInput ref="uploadFile" class="inline-block w-full mb-0" input-type="file" v-model="logo" />
              <AdmoButton button-type="button" class="inline-block" text="Save" @click.native="uploadLogo" is-small />
            </div>
          </div>
          <div class="mb-4 w-1/2">
            <span class="font-bold block">Business name</span>
            <div class="flex w-full">
              <AdmoInput class="inline-block w-full mb-0" input-type="text" :value="generalInformation.generalInformation" />
              <AdmoButton button-type="button" class="inline-block" text="Save" is-small />
            </div>
          </div>
          <div class="mb-4 w-1/2">
            <span class="font-bold block">Address</span>
            <div class="flex">
              <AdmoInput class="inline-block w-full mb-0" input-type="text" value="untype" />
              <AdmoButton button-type="button" class="inline-block" text="Save" is-small />
            </div>
          </div>
          <div class="mb-4 w-1/2">
            <span class="font-bold block">City</span>
            <div class="flex">
              <AdmoInput class="inline-block w-full mb-0" input-type="text" value="untype" />
              <AdmoButton button-type="button" class="inline-block" text="Save" is-small />
            </div>
          </div>
          <div class="mb-4 w-1/2">
            <span class="font-bold block">ZIP</span>
            <div class="flex">
              <AdmoInput class="inline-block w-full mb-0" input-type="text" value="untype" />
              <AdmoButton button-type="button" class="inline-block" text="Save" is-small />
            </div>
          </div>
          <div class="mb-4 w-1/2">
            <span class="font-bold block">Steuernummer</span>
            <div class="flex">
              <AdmoInput class="inline-block w-full mb-0" input-type="text" value="untype" />
              <AdmoButton button-type="button" class="inline-block" text="Save" is-small />
            </div>
          </div>
          <div class="w-01/2">
            <span class="font-bold block">Umsatzsteuer-ID</span>
            <div class="flex">
              <AdmoInput class="inline-block w-full mb-0" input-type="text" value="untype" />
              <AdmoButton button-type="button" class="inline-block" text="Save" is-small />
            </div>
          </div>
        </AdmoBox>
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import { createClient } from '@supabase/supabase-js'
import AdmoPanel from "@/components/layout/AdmoPanel";
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoInput from "@/components/atoms/AdmoInput";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoBox from "@/components/molecules/boxes/AdmoBox";



const STORAGE_URL = process.env.SUPABASE_URL
const SERVICE_KEY = process.env.SUPABASE_API_KEY
const supabase = createClient(STORAGE_URL, SERVICE_KEY)

export default {
  components: {AdmoBox, AdmoButton, AdmoInput, AdmoHeadline, AdmoContainer, AdmoPanel },
  data(){
    return {
      logo: null
    }
  },
  methods: {
    async updateGeneralInformation(id){
      const result = await this.$axios.patch(`/api/v1/settings/general-information/${id}`)
      return result
    },
    async uploadLogo() {
      const file = this.$refs.uploadFile.$el.files[0]
      const { data, errorUpload } = await supabase
        .storage
        .from('files')
        .upload(`${file.name}`, file, {
          cacheControl: '3600',
          upsert: false
        })
      console.log(data)
      if(errorUpload){
        console.log(errorUpload)
        return
      }

      const { publicURL, errorGetPublicUrl } = supabase
        .storage
        .from('files')
        .getPublicUrl(file.name)

      if(errorGetPublicUrl){
        console.log(errorGetPublicUrl)
        return
      }

      if(publicURL) {
        this.$store.dispatch('ui/settings.store/setLogoUrl', publicURL)
        // await this.$axios.$post('api/v1/settings/general-information/logo')
      }
    }
  },
  async asyncData({ $axios}) {
    const { data } = await $axios('/api/v1/settings/general-information')
    const generalInformation = data[0]
    return { generalInformation }
  }
}
</script>
