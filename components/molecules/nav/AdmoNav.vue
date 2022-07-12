<template>
  <nav class="bg-gray-500">
    <AdmoContainer>
      <ul>
        <li class="nav-item" :class="{
          'block': isMobile,
          'inline-block': !isMobile,
        }" v-for="(item, index) in navItems" :key="index">
          <nuxt-link class="block py-3 px-5 text-white" :class="{'ml-4': isMobile }" :to="item.to" >{{ item.text }}</nuxt-link>
        </li>
      </ul>
    </AdmoContainer>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import AdmoContainer from "@/components/layout/AdmoContainer";
export default {
  name: 'AdmoNav',
  components: {AdmoContainer},
  data(){
    return {
      navItems: [
        {
          to: '/dashboard',
          text: 'Dashboard'
        },
        {
          to: '/contacts',
          text: 'Contacts'
        },
        {
          to: '/clients',
          text: 'Clients'
        },
        {
          to: '/proposals',
          text: 'Proposals'
        },
        {
          to: '/invoices',
          text: 'Invoices'
        },
        {
          to: '/revenues',
          text: 'Revenues'
        },
        {
          to: '/settings',
          text: 'Settings'
        }
      ]
    }
  },
  computed: {
    ...mapState('ui/breakpoints.store',['isMobile'])
  }
}
</script>

<style scoped>
.nuxt-link-active {
  @apply underline
}

ul li:first-of-type a {
  padding-left: 0;
}
</style>
