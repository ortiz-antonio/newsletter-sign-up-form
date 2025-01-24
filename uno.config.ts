import { defineConfig, presetUno, transformerVariantGroup } from 'unocss'

import blocks from './src/design-system/blocks'
import compositions from './src/design-system/compositions'

import colorTokens from './src/design-tokens/colors.json'
import fontSizeTokens from './src/design-tokens/font-sizes.json'
import fontTokens from './src/design-tokens/fonts.json'
import spacingTokens from './src/design-tokens/spaces.json'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/design-system/*.{js,ts}',
        'src/design-tokens/*.{json}',
      ],
    },
  },
  presets: [presetUno({ preflight: false })],
  transformers: [transformerVariantGroup()],
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
  shortcuts: [compositions, blocks],
})
