import { defineConfig, presetUno, transformerDirectives } from 'unocss'

import colorTokens from './src/tokens/colors.json'
import fontSizeTokens from './src/tokens/font-sizes.json'
import fontTokens from './src/tokens/fonts.json'
import spacingTokens from './src/tokens/spaces.json'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  transformers: [transformerDirectives()],
  extendTheme: (theme) => {
    return {
      ...theme,
      colors: colorTokens.colors,
      fontWeight: fontTokens.fontWeight,
      lineHeight: fontTokens.lineHeight,
      fontFamily: fontTokens.fontFamily,
      fontSize: fontSizeTokens.fontSize,
      spacing: spacingTokens.spacing,
    }
  },

})
