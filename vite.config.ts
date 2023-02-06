import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },

  plugins: [
    vue(),

    /**
     * Vite Plugin Pages
     * https://github.com/hannoeru/vite-plugin-pages#configuration
     */
    Pages({
      dirs: [
        { dir: path.resolve(__dirname, './src/app/pages'), baseRoute: '/' },
      ],
      exclude: ['**/components/*.vue'],
    }),

    /**
     * Vite Plugin Vue Layouts
     * https://github.com/JohnCampionJr/vite-plugin-vue-layouts#using-configuration
     */
    Layouts({
      layoutsDirs: 'src/app/layouts',
    }),
  ],
})
