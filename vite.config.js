import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetUno, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          collections: {
            custom: {
              circle: '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"></circle></svg>',
              /*And then, you can use it on your html: <span class="i-custom:circle"></span>*/
            },
            carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
            mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
            logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
          },
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      /* options */
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // change name to your repo name " base: '/REPO/' "
  base: '/vue3/',
})
