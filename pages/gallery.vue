<template>
  <section>
    <div class="heading">
      <h1>Awesome Image Gallery</h1>
      <p>Photo Credits:
        <a href="https://pixelford.com"> Pixelford.com </a>
      </p>
    </div>
    <section class="grid">
      <div
        class="grid-item"
        v-for="(image, index) in images"
        :key="`image-${index}`"
      >
        <img :src="image.url_small_size" :alt="image.title">
        <p>{{ image.description }}</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'GalleryComponent',
  async asyncData ({ $http }) {
    const res = await $http.$get('https://pixelford.com/api/image/category/1/qty/20')
    return {
      images: res
    }
  }
}
</script>

<style>
body {
  margin: 0 auto;
  border: 10px solid #6a5acd;
}

.heading {
  text-align: center;
  padding: 20px;
  font-size: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 30px;
}

.grid-item {
  border-radius: 5px;
  height: 200px;
  cursor: pointer;
  margin: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -30px, rgba(0, 0, 0, 0.3) 0px 30px 60px -40px;
}

.grid-item img {
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 2px;
}

.grid-item p {
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  padding: 5px;
}

.grid-item:hover {
  box-shadow: rgba(22, 18, 13, 0.501) 0px 4px 12px;
}

@media screen and (min-width: 481px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}

@media screen and (min-width: 769px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
}
</style>
