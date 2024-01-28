import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from './pinia/createPinia.ts'

createApp(App).use(createPinia()).mount('#app')
