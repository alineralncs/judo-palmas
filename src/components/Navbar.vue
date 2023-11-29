
<script>
export default {
  name: "blueGray-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
<template>
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b rounded-xl shadow-xl">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 ">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
          <router-link class="navbar-brand" to="/"> <img src="../assets/judo_em_palmas_logo.png" class="w-auto h-12"
              alt="logo" /></router-link>
        </a>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button" v-on:click="toggleNavbar()">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
        </button>
      </div>
      <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center ">
        <ul class="flex flex-col lg:flex-row list-none ml-auto justify-end">
          <li class="nav-item">
            <a class="px-5 py-2 flex items-center  text-2xl hover:opacity-75  " href="#pablo">
              <router-link class="navbar-brand" to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-5 py-2 flex items-center text-2xl hover:opacity-75 " href="#pablo">
              <router-link class="navbar-brand" to="/TextPage">História do Judô</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-5 py-2 flex items-center  text-2xl hover:opacity-75 " href="#pablo">
              <router-link class="navbar-brand" to="/Mapa">Mapa</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-5 py-2 flex items-center  text-2xl hover:opacity-75" href="#pablo">
              <router-link class="navbar-brand" to="/Mapa">Another One</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</template>
  
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
@import url('https://fonts.googleapis.com/css?family=Montserrat');

nav {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  
}
nav a{
  font-size: 1rem;
  color: #000000;
}

</style>