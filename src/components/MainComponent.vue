<template>
  <main>
    <div class="gallery">
      <GalleyCardComponent title="Animais" class="card-1"/>
      <GalleyCardComponent title="Arquitetura" class="card-2"/>
      <GalleyCardComponent title="Cidades" class="card-3"/>
      <GalleyCardComponent title="Decorações" class="card-4"/>
      <GalleyCardComponent title="Esportes" class="card-5"/>
      <GalleyCardComponent title="Natureza" class="card-6"/>
      <GalleyCardComponent title="Paisagens" class="card-7"/>
      <GalleyCardComponent title="Pessoas" class="card-8"/>
      <GalleyCardComponent title="Refeições" class="card-9"/>
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

