<template>
  <div class="gallery-card" >
      <h2 class="gallery-card-title">{{ title }}</h2>
      <a href="" class="gallery-card-btn">Mais fotos</a>
    

  </div>
</template>

<script>
import '../styles/gallery-cards.sass'
export default {
  name: "GalleyCardComponent",
  props: {
    title: String
  }
}
</script>

