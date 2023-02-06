import path from 'path'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

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

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      resolvers: [NaiveUiResolver()],
      dts: 'src/components.d.ts',
      dirs: ['src/app/components'],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingbar',
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/app/components/',
      ],
    }),
  ],
})
