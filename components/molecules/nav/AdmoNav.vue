<template>
  <nav class="bg-gray-500">
    <AdmoContainer>
      <ul>
        <li class="nav-item inline-block" v-for="(item, index) in navItems" :key="index">
          <nuxt-link class="block py-3 px-5 text-white" :to="item.to" >{{ item.text }}</nuxt-link>
        </li>
      </ul>
    </AdmoContainer>
  </nav>
</template>

<script>
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
  }
}
</script>

<style>
.nav-item:first-of-type {
 margin-left: -24px;
}
.nuxt-link-active {
  @apply underline
}
</style>
