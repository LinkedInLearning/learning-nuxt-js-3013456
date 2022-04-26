<template>
  <div>
    <h1>Hello World!</h1>
    <button v-tooltip="'this is our button'">Button</button>
  </div>
</template>

<script>
import 'floating-vue/dist/style.css'

export default {
  name: 'IndexPage',
  mounted() {
    this.$welcome('to my new page!')
  }
}
</script>
