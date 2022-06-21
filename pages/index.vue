<template>
  <div></div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      number: 1
    }
  },
  computed: {
    random(){
      return this.number + 1
    }
  }
}
</script>
