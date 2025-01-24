import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  integrations: [
    UnoCSS(),
    {
      name: 'watch-tokens',
      hooks: {
        'astro:config:setup': ({ addWatchFile, config }) => {
          addWatchFile(new URL('./src/design-system/compositions.js', config.root))
          addWatchFile(new URL('./src/design-system/blocks.js', config.root))
        },
      },
    },
  ],

  build: {
    assets: '_assets',
  },
  vite: {
    optimizeDeps: {
      include: ['uno.config.ts'],
    },
  },
})
