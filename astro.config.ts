import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import vite from './viteConfig'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: '/src/vue',
    }),
    UnoCSS({ injectReset: true }),
  ],
  vite,
})
