import { createStitches } from '@stitches/react'

import { darkThemePalette, lightThemePalette } from './color'
import { mediaQueries } from './mediaQuery'
import { styleTheme } from './style'
import { utils } from './utils'

// cf https://stitches.dev/docs/api#createstitches
const { styled, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    media: mediaQueries,
    theme: {
      ...styleTheme,
      colors: lightThemePalette,
    },
    utils,
  })

export { config, getCssText, keyframes, styled, theme }

/**
 * アプリ全体のグローバルCSSを定義する
 */
export const globalStyles = globalCss({
  html: {
    c: '$foreground',
    bgc: '$background',
    bc: '$accent',
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: 1.55,
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  h1: {
    fontWeight: '700',
    fontSize: '2.125rem',
    lineHeight: 1.3,
  },
  h2: {
    fontWeight: '700',
    fontSize: '1.625rem',
    lineHeight: 1.35,
  },
  h3: {
    fontWeight: '700',
    fontSize: '1.375rem',
    lineHeight: 1.4,
  },
  h4: {
    fontWeight: '700',
    fontSize: '1.125rem',
    lineHeight: 1.45,
  },
  h5: {
    fontWeight: '700',
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: '700',
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
})

export const lightTheme = createTheme('light-theme', {
  colors: lightThemePalette,
})

export const darkTheme = createTheme('dark-theme', {
  colors: darkThemePalette,
})
