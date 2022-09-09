<template>
  <main>
    <div class="gallery">
      <GalleyCardComponent title="Animais"/>
      <GalleyCardComponent title="Arquitetura"/>
      <GalleyCardComponent title="Cidades"/>
      <GalleyCardComponent title="Decorações"/>
      <GalleyCardComponent title="Esportes"/>
      <GalleyCardComponent title="Natureza"/>
      <GalleyCardComponent title="Paisagens"/>
      <GalleyCardComponent title="Pessoas"/>
      <GalleyCardComponent title="Refeições"/>
    </div>
  </main>
</template>

<script>
import '../styles/gallery.sass'
import GalleyCardComponent from "@/components/GalleyCardComponent";
export default {
  name: "MainComponent",
  components: {GalleyCardComponent}
}
</script>

<style lang="sass">

</style>