import { generateColorPaletteVariants, generateSpacingVariants } from './generateVariants'

/**
 * @description
 * Stitchesで拡張するコンポーネントに共通で付与するvariant
 * 基本スタイルをpropsでutility的に取り扱うことができる。
 * ！サイズ・スペースや色の値はトークンで定義されたものに限るので注意！
 */
export const variantCommon = {
  /** @alias display */
  d: {
    block: { display: 'block' },
    'inline-block': { display: 'inline-block' },
    inline: { display: 'inline' },
    flex: { display: 'flex' },
    'inline-flex': { display: 'inline-flex' },
    table: { display: 'table' },
    'inline-table': { display: 'inline-table' },
    'table-caption': { display: 'table-caption' },
    'table-cell': { display: 'table-cell' },
    'table-column': { display: 'table-column' },
    'table-column-group': { display: 'table-column-group' },
    'table-footer-group': { display: 'table-footer-group' },
    'table-header-group': { display: 'table-header-group' },
    'table-row-group': { display: 'table-row-group' },
    'table-row': { display: 'table-row' },
    'flow-root': { display: 'flow-root' },
    grid: { display: 'grid' },
    'inline-grid': { display: 'inline-grid' },
    contents: { display: 'contents' },
    'list-item': { display: 'list-item' },
    none: { display: 'none' },
  },
  /** @alias margin */
  m: generateSpacingVariants({ m: '$spacing' }),
  /** @util marginLeftとmarginRightを同時に適用する */
  mx: generateSpacingVariants({ mx: '$spacing' }),
  /** @util marginTopとmarginBottomを同時に適用する */
  my: generateSpacingVariants({ my: '$spacing' }),
  /** @alias marginTop */
  mt: generateSpacingVariants({ mt: '$spacing' }),
  /** @alias marginRight */
  mr: generateSpacingVariants({ mr: '$spacing' }),
  /** @alias marginBottom */
  mb: generateSpacingVariants({ mb: '$spacing' }),
  /** @alias marginLeft */
  ml: generateSpacingVariants({ ml: '$spacing' }),
  /** @alias padding */
  p: generateSpacingVariants({ p: '$spacing' }),
  /** @util paddingLeftとpaddingRightを同時に適用する */
  px: generateSpacingVariants({ px: '$spacing' }),
  /** @util paddingTopとpaddingBottomを同時に適用する */
  py: generateSpacingVariants({ py: '$spacing' }),
  /** @alias paddingTop */
  pt: generateSpacingVariants({ pt: '$spacing' }),
  /** @alias paddingRight */
  pr: generateSpacingVariants({ pr: '$spacing' }),
  /** @alias paddingBottom */
  pb: generateSpacingVariants({ pb: '$spacing' }),
  /** @alias paddingLeft */
  pl: generateSpacingVariants({ pl: '$spacing' }),
  /** @util 子要素の横間隔を指定 */
  spaceX: generateSpacingVariants({ spaceX: '$spacing' }),
  /** @util 子要素の縦間隔を指定 */
  spaceY: generateSpacingVariants({ spaceY: '$spacing' }),
  /** @alias width */
  w: {
    ...generateSpacingVariants({ w: '$spacing' }),
    'fit-content': { w: 'fit-content' },
    'max-content': { w: 'max-content' },
    'min-content': { w: 'min-content' },
    full: { w: '100%' },
    screen: { w: '100vw' },
  },
  /** @alias minWidth */
  miw: {
    ...generateSpacingVariants({ miw: '$spacing' }),
    'fit-content': { miw: 'fit-content' },
    'max-content': { miw: 'max-content' },
    'min-content': { miw: 'min-content' },
    full: { miw: '100%' },
  },
  /** @alias maxWidth */
  maw: {
    ...generateSpacingVariants({ maw: '$spacing' }),
    'fit-content': { maw: 'fit-content' },
    'max-content': { maw: 'max-content' },
    'min-content': { maw: 'min-content' },
    full: { maw: '100%' },
    screen: { maw: '100vw' },
    none: { maw: 'none' },
    xs: { maw: '320px' },
    sm: { maw: '384px' },
    md: { maw: '448px' },
    lg: { maw: '512px' },
    xl: { maw: '576px' },
    '2xl': { maw: '672px' },
    '3xl': { maw: '768px' },
    '4xl': { maw: '896px' },
    '5xl': { maw: '1024px' },
    '6xl': { maw: '1152px' },
    '7xl': { maw: '1280px' },
    'screen-sm': { maw: '640px' },
    'screen-md': { maw: '768px' },
    'screen-lg': { maw: '1024px' },
    'screen-xl': { maw: '1280px' },
    'screen-2xl': { maw: '1536px' },
  },
  /** @alias height */
  h: {
    ...generateSpacingVariants({ h: '$spacing' }),
    'fit-content': { h: 'fit-content' },
    'max-content': { h: 'max-content' },
    'min-content': { h: 'min-content' },
    full: { h: '100%' },
    screen: {
      h: '100dvh',
    },
  },
  /** @alias minHeight */
  mih: {
    ...generateSpacingVariants({ mih: '$spacing' }),
    'fit-content': { mih: 'fit-content' },
    'max-content': { mih: 'max-content' },
    'min-content': { mih: 'min-content' },
    full: { mih: '100%' },
  },
  /** @alias maxHeight */
  mah: {
    ...generateSpacingVariants({ mah: '$spacing' }),
    'fit-content': { mah: 'fit-content' },
    'max-content': { mah: 'max-content' },
    'min-content': { mah: 'min-content' },
    full: { mah: '100%' },
    screen: {
      mah: '100dvh',
    },
  },
  /** @alias color 文字の色 */
  c: generateColorPaletteVariants({ c: '$color' }),
  /** @alias backgroundColor 背景色 */
  bgc: generateColorPaletteVariants({ bgc: '$color' }),
  /** @alias borderColor ボーダーの色 */
  bc: generateColorPaletteVariants({ bc: '$color' }),
  /** @alias position */
  pos: {
    relative: { position: 'relative' },
    absolute: { position: 'absolute' },
    fixed: { position: 'fixed' },
    static: { position: 'static' },
    sticky: { position: 'sticky' },
  },
  top: generateSpacingVariants({ top: '$spacing' }),
  left: generateSpacingVariants({ left: '$spacing' }),
  right: generateSpacingVariants({ right: '$spacing' }),
  bottom: generateSpacingVariants({ bottom: '$spacing' }),
  /** @alias zIndex */
  z: {
    auto: { zIndex: 'auto' },
    0: { zIndex: '0' },
    10: { zIndex: '10' },
    20: { zIndex: '20' },
    30: { zIndex: '30' },
    40: { zIndex: '40' },
    50: { zIndex: '50' },
  },
  /** @alias borderRadius 角丸の曲率半径 */
  br: {
    none: { borderRadius: '0' },
    xs: { borderRadius: '2px' },
    sm: { borderRadius: '4px' },
    md: { borderRadius: '8px' },
    lg: { borderRadius: '16px' },
    xl: { borderRadius: '32px' },
    full: { borderRadius: '9999px' },
  },
  /** @alias boxShadow ボックスシャドウ */
  shadow: {
    none: { boxShadow: '0 0 #0000' },
    xs: { boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)' },
    sm: {
      boxShadow:
        '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
    },
    md: {
      boxShadow:
        '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    },
    lg: {
      boxShadow:
        '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
    },
    xl: {
      boxShadow:
        '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',
    },
  },
  /** @alias fontFamily */
  ff: {
    sans: {
      fontFamily:
        "'system-ui', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
    },
    serif: {
      fontFamily:
        "'Georgia', 'Cambria', 'Times New Roman', 'Times', 'ヒラギノ明朝 ProN W6', 'HiraMinProN-W6', 'HG明朝E', 'MS P明朝', 'MS PMincho', 'MS 明朝', 'serif'",
    },
    mono: { fontFamily: "'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'" },
  },
  /** @alias fontSize */
  fz: {
    xs: { fontSize: '12px' },
    sm: { fontSize: '14px' },
    md: { fontSize: '16px' },
    lg: { fontSize: '18px' },
    xl: { fontSize: '20px' },
    '2xl': { fontSize: '24px' },
    '3xl': { fontSize: '30px' },
    '4xl': { fontSize: '36px' },
    '5xl': { fontSize: '48px' },
    '6xl': { fontSize: '60px' },
    '7xl': { fontSize: '72px' },
    '8xl': { fontSize: '96px' },
    '9xl': { fontSize: '128px' },
  },
  /** @alias fontWeight */
  fw: {
    thin: { fontWeight: '100' },
    extralight: { fontWeight: '200' },
    light: { fontWeight: '300' },
    normal: { fontWeight: '400' },
    medium: { fontWeight: '500' },
    semibold: { fontWeight: '600' },
    bold: { fontWeight: '700' },
    extrabold: { fontWeight: '800' },
    black: { fontWeight: '900' },
  },
  /** @alias fontStyle */
  fs: {
    normal: { fontStyle: 'normal' },
    italic: { fontStyle: 'italic' },
  },
  /** @alias letterSpacing */
  lts: {
    xs: { letterSpacing: '-0.05em' },
    sm: { letterSpacing: '-0.025em' },
    md: { letterSpacing: '0' },
    lg: { letterSpacing: '0.025em' },
    xl: { letterSpacing: '0.05em' },
  },
  /** @alias textAlign */
  ta: {
    left: { textAlign: 'left' },
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
    justify: { textAlign: 'justify' },
    start: { textAlign: 'start' },
    end: { textAlign: 'end' },
  },
  /** @alias lineHeight */
  lh: {
    none: { lingHeight: 1 },
    xs: { lingHeight: 1.25 },
    sm: { lingHeight: 1.375 },
    md: { lingHeight: 1.5 },
    lg: { lingHeight: 1.625 },
    xl: { lingHeight: 2 },
  },
  /** @alias textTransform */
  tt: {
    uppercase: { textTransform: 'uppercase' },
    lowercase: { textTransform: 'lowercase' },
    capitalize: { textTransform: 'capitalize' },
    none: { textTransform: 'none' },
  },
  /** @alias textDecoration */
  td: {
    underline: { textDecorationLine: 'underline' },
    overline: { textDecorationLine: 'overline' },
    'line-through': { textDecorationLine: 'line-through' },
    none: { textDecorationLine: 'none' },
  },
}
