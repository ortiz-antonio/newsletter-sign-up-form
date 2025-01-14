#!/usr/bin/env node

import token from '../build/tokens/breakpoints.json' with { type: 'json' };

export const fontConfig = {
  minWidth: Number.parseInt(token.breakpoints.sm.$value),
  maxWidth: Number.parseInt(token.breakpoints.lg.$value),
  minFontSize: 16,
  maxFontSize: 18,
  minTypeScale: 1.5,
  maxTypeScale: 1.5,
  positiveSteps: 3,
  negativeSteps: 0,
};
