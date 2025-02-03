#!/usr/bin/env node

import token from "../build/tokens/breakpoints.json" with { type: "json" };

export const fontConfig = {
  minWidth: Number.parseInt(token.breakpoints.sm.$value),
  maxWidth: Number.parseInt(token.breakpoints.md.$value),
  minFontSize: 16,
  maxFontSize: 17,
  minTypeScale: 1.125,
  maxTypeScale: 1.2,
  positiveSteps: 6,
  negativeSteps: 0,
};
