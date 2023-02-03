import type { App } from 'vue'
import type { Module } from '@/types'

type ILoadModules = (app: App) => void

export const loadModules: ILoadModules = (app: App) => {
  const modules = Object.values(import.meta.glob<{ install: Module }>('../../modules/*.ts', { eager: true }))

  if (modules.length === 0)
    console.warn('No module was found in the given directory')

  modules.forEach(module => module.install(app))
}
