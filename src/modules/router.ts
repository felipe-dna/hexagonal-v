import type { App } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createRouter, createWebHistory } from 'vue-router'
import type { Module } from '@/types'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  routes,
  history: createWebHistory(),
})

/**
 * Before Guards
 */
router.beforeEach(async (to, from) => {})

/**
 * After Guards
 */
router.afterEach(async (to, from) => {})

export const install: Module = (app: App) => app.use(router)
