<template>
  <div>
    <AdmoPanel>
      <AdmoContainer>
        <div class="flex justify-between">
          <AdmoHeadline headline-type="h1" text="Clients" />
          <AdmoButton
            class="w-auto self-start"
            button-type="button"
            button-classes="border-2 border-black text-black font-bold"
            text="Create new client"
            @click.native="openOverlay"
          />
        </div>
      </AdmoContainer>
      <AdmoContainer>
        <AdmoTable>
          <AdmoTableHead :head-cells="headCells" />
          <AdmoTableRow
            v-for="client in clients"
            :key="client._id"
            class="grid grid-cols-4"
          >
            <AdmoTableCell>
              <template #generic>
                <nuxt-link :to="`clients/${client._id}`">{{ client.company }}</nuxt-link>
              </template>
            </AdmoTableCell>
            <AdmoTableCell :text="client.street" />
            <AdmoTableCell :text="client.city" />
            <AdmoTableCell :text="client.zip" />
          </AdmoTableRow>
        </AdmoTable>
      </AdmoContainer>
    </AdmoPanel>
    <AdmoOverlay v-if="isActive">
      <AdmoCreateClientForm @reload-data="reloadData('clients')" />
    </AdmoOverlay>
  </div>
</template>
<script>
import AdmoPanel from '@/components/layout/AdmoPanel'
import AdmoContainer from '@/components/layout/AdmoContainer'
import AdmoHeadline from '@/components/atoms/AdmoHeadline'
import AdmoButton from '@/components/atoms/AdmoButton'
import AdmoOverlay from '@/components/molecules/overlays/AdmoOverlay'
import hasOverlayMixin from '@/mixins/overlay/hasOverlayMixin'
import AdmoCreateClientForm from '@/components/organisms/forms/create_client_form/AdmoCreateClientForm'
import AdmoTable from '@/components/molecules/tables/AdmoTable'
import AdmoTableHead from '@/components/molecules/tables/AdmoTableHead'
import AdmoTableRow from '@/components/molecules/tables/AdmoTableRow'
import AdmoTableCell from '@/components/molecules/tables/AdmoTableCell'
export default {
  components: {
    AdmoTableCell,
    AdmoTableRow,
    AdmoTableHead,
    AdmoTable,
    AdmoCreateClientForm,
    AdmoOverlay,
    AdmoButton,
    AdmoHeadline,
    AdmoContainer,
    AdmoPanel,
  },
  mixins: [hasOverlayMixin],
  async asyncData({ $axios, store }) {
    const clients = await $axios.$get('/api/v1/clients')
    if (clients.length > 0) {
      store.dispatch('data/clients.store/setClients', clients)
    }
    return { clients }
  },
  data() {
    return {
      headCells: ['Firma', 'Straße', 'Stadt', 'PLZ'],
    }
  },
}
</script>
