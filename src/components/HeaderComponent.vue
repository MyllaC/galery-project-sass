<template>
  <header class="header">
    <a href="#" class="header-brand">Gallery</a>
    <nav class="header-navbar">
      <ul>
        <li>
          <a  href="#" class="active">Home</a>
        </li>
        <li>
          <a  href="#" >Fotos</a>
        </li>
        <li>
          <a href="#" >Serviços</a>
        </li>
        <li>
          <a href="#" >Sobre</a>
        </li>
        <li>
          <a href="#" >Contato</a>
        </li>
      </ul>
    </nav>

    <div class="header-social-media">
      <ul>
        <li>
          <a href="#">
            <i><font-awesome-icon icon="fa-brands fa-facebook" /></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i><font-awesome-icon icon="fa-brands fa-twitter" /></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i><font-awesome-icon icon="fa-brands fa-instagram" /></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i><font-awesome-icon icon="fa-brands fa-youtube" /></i>
          </a>
        </li>
      </ul>
    </div>

  </header>
</template>


<script>
  import '../styles/header.sass'
  export default {
    name: "HeaderComponent"
  }
</script>

<style>

</style>