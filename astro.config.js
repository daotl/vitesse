import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import viteConfig from './viteConfig'

// https://astro.build/config
export default defineConfig({
  // Enable Vue to support Vue components.
  integrations: [
    vue({
      appEntrypoint: '/src/main',
    }),
    UnoCSS({ injectReset: true }),
  ],
  vite: viteConfig,
})
