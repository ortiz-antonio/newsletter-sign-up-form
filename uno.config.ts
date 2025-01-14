import { defineConfig, presetUno, transformerDirectives } from 'unocss'

import myTheme from './my-theme'

export default defineConfig({
  presets: [
    presetUno({ preflight: false }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: myTheme,
})
