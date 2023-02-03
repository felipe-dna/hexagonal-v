import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { loadModules } from '@/core/base/modules'

const app = createApp(App)

loadModules(app)

app.mount('#app')
