<template>
  <HeaderComponent/>
  <MainComponent />
  <FooterComponent />
</template>

<script>
import './assets/tailwind.css'
import './styles/styles.sass'
import HeaderComponent from "@/components/HeaderComponent";
import MainComponent from "@/components/MainComponent";
import FooterComponent from "@/components/FooterComponent";
export default {
  name: 'App',
  components: {FooterComponent, MainComponent, HeaderComponent},
}
</script>
