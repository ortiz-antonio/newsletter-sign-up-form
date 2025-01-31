import { defineConfig, presetUno, transformerVariantGroup } from "unocss";

import compositions from "./src/design-system/compositions";
import ui from "./src/design-system/ui";

import colorTokens from "./src/design-tokens/colors.json";
import fontSizeTokens from "./src/design-tokens/font-sizes.json";
import fontTokens from "./src/design-tokens/fonts.json";
import spacingTokens from "./src/design-tokens/spaces.json";

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(webc|html)($|\?)/,
        "src/design-system/*.{js,ts}",
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
    };
  },
  shortcuts: [compositions, ui],
});
