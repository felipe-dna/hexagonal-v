import type { App } from 'vue'
import naive from 'naive-ui'
import type { Module } from '@/app/types'

export const install: Module = (app: App) => app.use(naive)
