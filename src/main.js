import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' // Import the necessary functions from vue-router
import './style.css'
import App from './App.vue'

import HomePage from './components/HomePage.vue'
import TextPage from './components/TextPage.vue'
import Mapa from './components/Mapa.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/Historia', component: TextPage },
        { path: '/Mapa', component: Mapa },
    ]
})

createApp(App).use(router).mount('#app') // Use the router with the app

