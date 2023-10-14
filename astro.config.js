import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

// eslint-disable-next-line import/no-unresolved
import UnoCSS from 'unocss/astro'

// eslint-disable-next-line import/no-unresolved
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
