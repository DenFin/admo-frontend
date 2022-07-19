<template>
    <div>
      <div v-if="hasPages" class="flex justify-center">
        <nuxt-link v-for="(page, index) in pager.pages" :key="index" class="block rounded-full h-10 w-10 flex justify-center items-center mx-1" :to="{query: {page: page}}"><span>{{ page }}</span></nuxt-link>
      </div>
      <div>Ergebnisse {{ pager.startIndex + 1 }} bis {{ pager.endIndex + 1 }}</div>
    </div>
</template>

<script>
export default {
  props: {
    pager: {
      type: Object,
      required: true,
    }
  },
  computed: {
    hasPages(){
      return !!this.pager.pages
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply bg-gray-400;
}
</style>
