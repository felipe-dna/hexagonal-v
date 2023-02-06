import type { App } from 'vue'
import { createPinia } from 'pinia'
import type { Module } from '@/app/types'

/**
 * https://pinia.vuejs.org/introduction.html#why-should-i-use-pinia
 */
const pinia = createPinia()

export const install: Module = (app: App) => app.use(pinia)
