import { createApp } from 'vue'
import App from './App.vue'
import { loadModules } from '@/app/core/base/modules'
import type { Plugin } from '@/app/types'

const app = createApp(App)

loadModules<Plugin>(app, module => module.install(app))

app.mount('#app')
