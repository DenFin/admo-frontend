<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 p-16">
    <AdmoContainer class="h-full flex items-center lg:max-w-3xl">
      <div class="bg-white p-12 w-full relative">
        <slot></slot>
        <div @click="closeOverlay" class="shadow-md cursor-pointer -top-4 -right-4 bg-white w-8 h-8 absolute top-0 right-0">
          <span class="relative block">
            <span class="bg-black h-5 w-0.5 block absolute top-2 left-2 origin-top-left transform -rotate-45"></span>
            <span class="bg-black h-5 w-0.5 block absolute top-2 right-2 origin-top-right transform rotate-45"></span>
          </span>
        </div>
      </div>
    </AdmoContainer>
  </div>
</template>
<script>
import AdmoContainer from "@/components/layout/AdmoContainer";
import isEmptyObject from "@/modules/helpers/isEmptyObject";
export default {
  components: {AdmoContainer},
  methods: {
    closeOverlay(){
      const path = this.$route.path
      this.$store.dispatch('ui/overlay.store/setActive', false)
      this.$store.dispatch('ui/overlay.store/setDeleteWarning', false)
      if(!isEmptyObject(this.$route.query)) {
        console.log(this.$route.query)
        this.$router.replace({ path, query: ''})
      }

    }
  }
}
</script>
