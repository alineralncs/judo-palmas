<template>
  <div class="mx-auto items-center justify-center flex bg-slate-50 py-6">
    <h1
      class="text-xl font-semibold tracking-wide mx-auto justify-center font-hoe items-center text-gray-800 dark:text-white lg:text-xl">
      Confira os todos os espaços de judô federados em Palmas-TO
    </h1>
  </div>
  <div class="pt-6">
  <iframe class="mx-auto  bg-black"
    src="https://www.google.com/maps/d/embed?mid=1LFM2JdDWYBClyE5HDEuizdG2ATJCo78&ehbc=2E312F" width="1000"
    height="600"></iframe>
  </div>
</template>

<style scoped> iframe {
   border-radius: 10px;

 }

 .i4ewOd-pzNkMb-haAclf {
   background-color: blue;
 }
</style>


<!-- 
<template>
  <GmapMap
    :center="{ lat: 0, lng: 0 }"
    :zoom="12"
    style="width: 100%; height: 400px;"
  >
    <GmapMarker :position="{ lat: 0, lng: 0 }"></GmapMarker>
  </GmapMap>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';

export default {
  data() {
    return {
      // Seus dados aqui
    };
  },
  mounted() {
    // Faz alguma coisa após o componente ser montado
  },
  methods: {
    // Seus métodos aqui
  },
  computed: {
    // Seus cálculos computados aqui
  },
  components: {
    GmapMap: VueGoogleMaps.Map,
    GmapMarker: VueGoogleMaps.Marker,
  },
};

// Dentro da tag <script> do seu componente, adicione o seguinte código para configurar a biblioteca
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBR0AWNzxAfVgA4hS3doQhOi2UmZ7HlZYU',
  },
  installComponents: true,
});
</script> -->
