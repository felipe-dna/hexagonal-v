import type { App } from 'vue'

export const loadModules = <O extends Object>(app: App, cb: (module: O) => void) => {
  const modules = Object.values(import.meta.glob<O>('../../plugins/*.ts', { eager: true }))

  if (modules.length === 0)
    console.warn('No plugins folder was found in the given directory')

  modules.forEach(module => cb(module))
}
