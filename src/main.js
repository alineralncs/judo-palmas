import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' // Import the necessary functions from vue-router
import './style.css'


import App from './App.vue'

import HomePage from './components/HomePage.vue'
import Mapa from './components/Mapa.vue'
import Galeria from './components/Galeria.vue'
import Entrevistas from './components/Entrevistas.vue'

import Interview from './components/Interview.vue'
import SobreNos from './components/SobreNos.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/Mapa', component: Mapa },
        { path: '/Historia', component: Entrevistas },
        { path: '/Entrevistas', component: Interview},
        { path: '/SobreNos', component: SobreNos},
    ]
})

createApp(App).use(router).mount('#app') // Use the router with the app


