<template>
  <h1>Hello World!</h1>
</template>

<script>
export default {
  name: 'IndexPage',
  head () {
    return {
      meta: [
        {
          hid: 'title',
          content: 'Home Page'
        },
        {
          hid: 'description',
          content: 'This is the Home Page'
        },
      ]
    }
  }
}
</script>
