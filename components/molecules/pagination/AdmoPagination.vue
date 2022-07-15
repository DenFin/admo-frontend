<template>
    <div class="flex justify-center">
      <nuxt-link class="block rounded-full h-10 w-10 flex justify-center items-center mx-1" :to="{query: {page: 1}}"><span>1</span></nuxt-link>
      <nuxt-link class="block rounded-full h-10 w-10 flex justify-center items-center mx-1" :to="{query: {page: 2}}"><span>2</span></nuxt-link>
      <nuxt-link class="block rounded-full h-10 w-10 flex justify-center items-center mx-1" :to="{query: {page: 3}}"><span>3</span></nuxt-link>
    </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply bg-gray-400;
}
</style>
