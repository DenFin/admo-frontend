<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="w-full inline-flex justify-between">
          <AdmoHeadline headline-type="h1" text="Contacts" />
          <AdmoButton
            class="w-auto self-start"
            button-type="button"
            button-classes="border-2 border-black text-black font-bold"
            text="Create new contact"
            @click.native="openOverlay"
          />
        </div>
        <section class="py-5">
          <AdmoTableContacts
            :contacts="contactsSorted"
            @reload-data="reloadData('contacts')"
            @open-overlay-edit="openOverlay($event)"
          />
        </section>
        <section>
          <div class="flex justify-center">
              <AdmoPagination :pager="pager" />
          </div>
        </section>
      </AdmoContainer>
    </AdmoPanel>
    <AdmoOverlay
      v-if="isActive || deleteWarning"
      :class="{ isActive: isActive }"
      overlay-classes="p-0"
    >
      <AdmoFormContactCreate
        v-if="isActive"
        @reload-data="reloadData('contacts')"
      />
      <AdmoOverlayConfirmDelete
        v-if="deleteWarning"
        content-type="Kontakt"
        @reload-data="reloadData('contacts')"
      />
    </AdmoOverlay>
    <AdmoNotification
      v-if="successNotice"
      :text="`Contact ${successItemId} wurde erfolgreich erstellt.`"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import hasOverlayMixin from '@/mixins/overlay/hasOverlayMixin'
import AdmoContainer from '@/components/layout/AdmoContainer'
import AdmoHeadline from '@/components/atoms/AdmoHeadline'
import AdmoButton from '@/components/atoms/AdmoButton'
import AdmoFormContactCreate from '@/components/molecules/forms/AdmoFormContactCreate'
import AdmoTableContacts from '@/components/molecules/tables/AdmoTableContacts'
import AdmoPanel from '@/components/layout/AdmoPanel'
import AdmoOverlay from '@/components/molecules/overlays/AdmoOverlay'
import isEmptyObject from '@/modules/helpers/isEmptyObject'
import AdmoOverlayConfirmDelete from '@/components/molecules/overlays/AdmoOverlayConfirmDelete'
import AdmoNotification from "@/components/molecules/notifications/AdmoNotification";
import AdmoPagination from "@/components/molecules/pagination/AdmoPagination";

export default {
  components: {
    AdmoPagination,
    AdmoNotification,
    AdmoOverlayConfirmDelete,
    AdmoOverlay,
    AdmoPanel,
    AdmoFormContactCreate,
    AdmoHeadline,
    AdmoContainer,
    AdmoButton,
    AdmoTableContacts,
  },
  mixins: [hasOverlayMixin],
  computed: {
    ...mapState('ui/overlay.store', ['deleteWarning']),
    ...mapState('ui/overlay.store', ['successNotice']),
    ...mapState('ui/overlay.store', ['successItemId']),

    contactsSorted() {
      const contactsSorted = this.contacts
      return contactsSorted.sort((a, b) => {
        return a.lastname.localeCompare(b.lastname)
      })
    },
  },
  async asyncData({ $axios }) {
    const result = await $axios.$get('/api/v1/contacts')
    const contacts = result.items
    return { contacts }
  },
  data(){
    return {
      pager: {
        currentPage: null
      }
    }
  },
  watch: {
    '$route.query.page'() {
     console.log("ROUTE CHANGED",this.$route.query.page)

        const page = parseInt(this.$route.query.page) || 1;
     console.log('PAge', page)
        if (page !== this.pager.currentPage) {
          fetch(`http://localhost:8080/api/v1/contacts?page=${page}`, { method: 'GET' })
            .then(response => response.json())
            .then(({pager, items}) => {
              console.log(items)
              this.pager = pager;
              this.contacts = items;
            });
        }
      }
  },
  mounted() {
    if (!isEmptyObject(this.$route.query))
      this.$store.dispatch('ui/overlay.store/setActive', true)

    if(!this.pager.currentPage) {
      this.$router.push({ query: { page: 1}})
    }
  },
}
</script>
