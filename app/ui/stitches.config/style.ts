/**
 * @description
 *
 * stitchesのスタイルトークンを設定する (色に関するトークンはcolor.tsで定義)
 * https://stitches.dev/docs/tokens
 *
 */
export const styleTheme = {
  borderStyles: {},
  borderWidths: {
    px: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },
  fonts: {
    sans: "'system-ui', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
    serif:
      "'Georgia', 'Cambria', 'Times New Roman', 'Times', 'ヒラギノ明朝 ProN W6', 'HiraMinProN-W6', 'HG明朝E', 'MS P明朝', 'MS PMincho', 'MS 明朝', 'serif'",
    mono: "'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'",
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
  },
  fontWeights: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  letterSpacings: {
    xs: '-0.05em',
    sm: '-0.025em',
    md: '0',
    lg: '0.025em',
    xl: '0.05em',
    '2xl': '0.1em',
  },
  lineHeights: {
    none: '1',
    xs: '1.25',
    sm: '1.375',
    md: '1.55',
    lg: '1.725',
    xl: '2',
  },
  radii: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
    full: '9999px',
  },
  shadows: {
    none: '0 0 #0000',
    xs: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)',
    sm: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem',
    md: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem',
    lg: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem',
    xl: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem',
  },
  sizes: {
    0: '0px',
    px: '1px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
    56: '224px',
    64: '256px',
    72: '288px',
    80: '320px',
    96: '384px',
    full: '100%',
  },
  space: {
    0: '0px',
    px: '1px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
    56: '224px',
    64: '256px',
    72: '288px',
    80: '320px',
    96: '384px',
  },
  zIndices: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
  },
}

// Utilでトークン文字列 e.g. "$12" の補完を効かせるための型定義
export type StyleThemeToken = {
  borderStyles: `$${keyof typeof styleTheme.borderStyles}`
  borderWidths: `$${keyof typeof styleTheme.borderWidths}`
  fonts: `$${keyof typeof styleTheme.fonts}`
  fontSizes: `$${keyof typeof styleTheme.fontSizes}`
  fontWeights: `$${keyof typeof styleTheme.fontWeights}`
  letterSpacings: `$${keyof typeof styleTheme.letterSpacings}`
  lineHeights: `$${keyof typeof styleTheme.lineHeights}`
  radii: `$${keyof typeof styleTheme.radii}`
  shadows: `$${keyof typeof styleTheme.shadows}`
  sizes: `$${keyof typeof styleTheme.sizes}`
  spaces: `$${keyof typeof styleTheme.space}`
  zIndices: `$${keyof typeof styleTheme.zIndices}`
}
