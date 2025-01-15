import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  integrations: [
    UnoCSS(),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
})
