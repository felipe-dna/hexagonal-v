import type { App } from 'vue'

export interface Plugin {
  install: Module
}

export type Module = (app: App) => void
