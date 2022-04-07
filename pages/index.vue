<template>
  <h1>Hello World!</h1>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.$welcome('to my new page!')
  }
}
</script>
