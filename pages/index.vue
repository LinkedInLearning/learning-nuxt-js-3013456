<template>
  <div>
    <h1>Rivers in the World!</h1>
    <ul>
      <li v-for="(river, index) in rivers" :key="`river-${index}`">
        {{ river.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  async asyncData ({ $http }) {
    // https://api.nuxtjs.dev/rivers
    const res = await $http.$get('https://api.nuxtjs.dev/rivers')
    return {
      rivers: res
    }
  }
}
</script>
