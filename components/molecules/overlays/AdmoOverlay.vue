<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 p-16">
    <AdmoContainer class="h-full flex items-center">
      <div class="bg-white p-12 w-full relative">
        <slot></slot>
        <div @click="closeOverlay" class="shadow-md -top-4 -right-4 bg-white w-8 h-8 absolute top-0 right-0"></div>
      </div>
    </AdmoContainer>
  </div>
</template>
<script>
import AdmoContainer from "@/components/layout/AdmoContainer";
export default {
  components: {AdmoContainer},
  methods: {
    closeOverlay(){
      this.$store.dispatch('ui/overlay.store/setActive', false)
    }
  }
}
</script>
