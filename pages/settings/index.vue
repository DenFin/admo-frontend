<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline headline-type="h1" text="Settings" />
      <AdmoBox>
        <AdmoHeadline
          class="mb-4"
          headline-type="h2"
          text="General information"
        />
        <div v-if="!settings.generalInformation.logoUrl" class="mb-4 w-1/2">
          <span class="font-bold block">Logo</span>
          <div class="flex w-full">
            <AdmoInput
              ref="uploadFile"
              v-model="logo"
              class="inline-block w-full mb-0"
              input-type="file"
            />
            <AdmoButton
              button-type="button"
              class="inline-block"
              text="Save"
              is-small
              @click.native="uploadLogo"
            />
          </div>
        </div>
        <div v-else class="mb-4 w-1/2">
          <span class="font-bold block">Logo</span>
          <img :src="settings.generalInformation.logoUrl" alt="">
        </div>
        <div class="mb-4 w-1/2">
          <span class="font-bold block">Business name</span>
          <div class="flex w-full">
            <AdmoInput
              class="inline-block w-full mb-0"
              input-type="text"
              v-model="generalInformation.companyName"
              :placeholder-text="settings.generalInformation.logoUrl"
            />
            <AdmoButton
              button-type="button"
              class="inline-block"
              text="Save"
              is-small
            />
          </div>
        </div>
        <div class="mb-4 w-1/2">
          <span class="font-bold block">Address</span>
          <div class="flex">
            <AdmoInput
              class="inline-block w-full mb-0"
              input-type="text"
              v-model="generalInformation.companyStreet"
            />
            <AdmoButton
              button-type="button"
              class="inline-block"
              text="Save"
              is-small
            />
          </div>
        </div>
        <div class="mb-4 w-1/2">
          <span class="font-bold block">City</span>
          <div class="flex">
            <AdmoInput
              class="inline-block w-full mb-0"
              input-type="text"
              v-model="generalInformation.companyCity"
            />
            <AdmoButton
              button-type="button"
              class="inline-block"
              text="Save"
              is-small
            />
          </div>
        </div>
        <div class="mb-4 w-1/2">
          <span class="font-bold block">ZIP</span>
          <div class="flex">
            <AdmoInput
              class="inline-block w-full mb-0"
              input-type="text"
              v-model="generalInformation.companyZip"
            />
            <AdmoButton
              button-type="button"
              class="inline-block"
              text="Save"
              is-small
            />
          </div>
        </div>
        <div class="mb-4 w-1/2">
          <span class="font-bold block">Steuernummer</span>
          <div class="flex">
            <AdmoInput
              class="inline-block w-full mb-0"
              input-type="text"
              v-model="generalInformation.taxNumber"
            />
            <AdmoButton
              button-type="button"
              class="inline-block"
              text="Save"
              is-small
            />
          </div>
        </div>
        <div class="w-1/2">
          <span class="font-bold block">Umsatzsteuer-ID</span>
          <div class="flex">
            <AdmoInput
              class="inline-block w-full mb-0"
              input-type="text"
              v-model="generalInformation.taxId"
            />
            <AdmoButton
              button-type="button"
              class="inline-block"
              text="Save"
              is-small
            />
          </div>
        </div>
        <AdmoButton @click.native="saveSettings" text="Speichern" button-type="button" class="mt-8 bg-green-500 border-green-500" />
      </AdmoBox>
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import {mapState} from "vuex";
import { createClient } from '@supabase/supabase-js'
import AdmoPanel from '@/components/layout/AdmoPanel'
import AdmoContainer from '@/components/layout/AdmoContainer'
import AdmoHeadline from '@/components/atoms/AdmoHeadline'
import AdmoInput from '@/components/atoms/AdmoInput'
import AdmoButton from '@/components/atoms/AdmoButton'
import AdmoBox from '@/components/molecules/boxes/AdmoBox'

const STORAGE_URL = process.env.SUPABASE_URL
const SERVICE_KEY = process.env.SUPABASE_API_KEY
const supabase = createClient(STORAGE_URL, SERVICE_KEY)

export default {
  components: {
    AdmoBox,
    AdmoButton,
    AdmoInput,
    AdmoHeadline,
    AdmoContainer,
    AdmoPanel,
  },
  computed: {
    ...mapState('data/settings.store', ['companyName']),
    ...mapState('data/settings.store', ['settings'])
  },
  async asyncData({ $axios }) {
    const { data } = await $axios('/api/v1/settings/general-information')
    const generalInformation = data[0]
    return { generalInformation }
  },
  data() {
    return {
      logo: null,
      generalInformation: {
        logoUrl: null,
        companyName: this.companyName || null,
        companyStreet: null,
        companyCity: null,
        companyZip: null,
        taxNumber: null,
        taxId: null
      }
    }
  },
  methods: {
    async updateGeneralInformation(id) {
      const result = await this.$axios.patch(
        `/api/v1/settings/general-information/${id}`
      )
      return result
    },
    async uploadLogo() {
      const file = this.$refs.uploadFile.$el.files[0]
      const { data, errorUpload } = await supabase.storage
        .from('files')
        .upload(`${file.name}`, file, {
          cacheControl: '3600',
          upsert: false,
        })
      console.log(data)
      if (errorUpload) {
        console.log(errorUpload)
        return
      }

      const { publicURL, errorGetPublicUrl } = supabase.storage
        .from('files')
        .getPublicUrl(file.name)

      if (errorGetPublicUrl) {
        console.log(errorGetPublicUrl)
        return
      }
      const userId = `62b5f460bb9be555931017a9`

      if (publicURL) {
        const body = {userId, publicURL}
        console.log(body)
        this.$store.dispatch('ui/settings.store/setLogoUrl', publicURL)
        await this.$axios.post('api/v1/settings/logo', body)
      }
    },
    async saveSettings(){
      const result = await this.$axios.post('/api/v1/settings/general-information', this.generalInformation)
      const { data } = result
      if(result.status === 201) {
        this.$store.dispatch('data/settings.store/setCompanyName', data.generalInformation.companyName)
      }
    }
  },
}
</script>
