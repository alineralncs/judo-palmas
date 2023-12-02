<script setup>
import Navbar from './components/Navbar.vue';
import HomePage from './components/HomePage.vue';
import Footer from './components/Footer.vue';
import Mapa from './components/Mapa.vue';
</script>

<template>
  <div>
    <Navbar />
    <router-view /> 
    <Footer />

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
