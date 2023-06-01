import { Property } from '@stitches/react/types/css'

import { ColorToken } from './color'
import { StyleThemeToken } from './style'

/**
 * @description
 * stitchesのstyledやcssで利用できるスタイル関数を定義する
 * https://stitches.dev/docs/utils
 *
 * エイリアスはmantineを参考にした
 * https://mantine.dev/styles/style-props/
 */
export const utils = {
  /** @alias display */
  d: (value: Property.Display) => ({ display: value }),
  /** @alias position */
  pos: (value: Property.Position) => ({ position: value }),
  /** @alias zIndex */
  z: (value: StyleThemeToken['zIndices'] | Property.ZIndex) => ({ zIndex: value }),
  /** @alias background */
  bg: (value: Property.Background) => ({ background: value }),
  /** @alias backgroundColor */
  bgc: (value: ColorToken | Property.BackgroundColor) => ({ backgroundColor: value }),
  /** @alias backgroundSize */
  bgsz: (value: Property.BackgroundSize) => ({ backgroundSize: value }),
  /** @alias backgroundPosition */
  bgp: (value: Property.BackgroundPosition) => ({ backgroundPosition: value }),
  /** @alias backgroundRepeat */
  bgr: (value: Property.BackgroundRepeat) => ({ backgroundRepeat: value }),
  /** @alias backgroundAttachment */
  bga: (value: Property.BackgroundAttachment) => ({ backgroundAttachment: value }),
  /** @alias padding */
  p: (value: StyleThemeToken['spaces'] | Property.Padding) => ({ padding: value }),
  /** @util paddingLeftとpaddingRightを同時に適用する */
  px: (value: StyleThemeToken['spaces'] | Property.PaddingLeft) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  /** @util paddingTopとpaddingBottomを同時に適用する */
  py: (value: StyleThemeToken['spaces'] | Property.PaddingTop) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  /** @alias paddingTop */
  pt: (value: StyleThemeToken['spaces'] | Property.PaddingTop) => ({ paddingTop: value }),
  /** @alias paddingBottom */
  pb: (value: StyleThemeToken['spaces'] | Property.PaddingBottom) => ({ paddingBottom: value }),
  /** @alias paddingLeft */
  pl: (value: StyleThemeToken['spaces'] | Property.PaddingLeft) => ({ paddingLeft: value }),
  /** @alias paddingRight */
  pr: (value: StyleThemeToken['spaces'] | Property.PaddingRight) => ({ paddingRight: value }),
  /** @alias margin */
  m: (value: StyleThemeToken['spaces'] | Property.Margin) => ({ margin: value }),
  /** @util marginLeftとmarginRightを同時に適用する */
  mx: (value: StyleThemeToken['spaces'] | Property.MarginLeft) => ({
    marginLeft: value,
    marginRight: value,
  }),
  /** @util marginTopとmarginBottomを同時に適用する */
  my: (value: StyleThemeToken['spaces'] | Property.MarginTop) => ({
    marginTop: value,
    marginBottom: value,
  }),
  /** @alias marginTop */
  mt: (value: StyleThemeToken['spaces'] | Property.MarginTop) => ({ marginTop: value }),
  /** @alias marginBottom */
  mb: (value: StyleThemeToken['spaces'] | Property.MarginBottom) => ({ marginBottom: value }),
  /** @alias marginLeft */
  ml: (value: StyleThemeToken['spaces'] | Property.MarginLeft) => ({ marginLeft: value }),
  /** @alias marginRight */
  mr: (value: StyleThemeToken['spaces'] | Property.MarginRight) => ({ marginRight: value }),
  /** @util 子要素の横間隔を指定 */
  spaceX: (value: StyleThemeToken['spaces'] | Property.MarginLeft) => ({
    '& > * + *': { marginLeft: value },
  }),
  /** @util 子要素の縦間隔を指定 */
  spaceY: (value: StyleThemeToken['spaces'] | Property.MarginTop) => ({
    '& > * + *': { marginTop: value },
  }),
  /** @alias width */
  w: (value: StyleThemeToken['sizes'] | Property.Width) => ({ width: value }),
  /** @alias minWidth */
  miw: (value: StyleThemeToken['sizes'] | Property.MinWidth) => ({ minWidth: value }),
  /** @alias maxWidth */
  maw: (value: StyleThemeToken['sizes'] | Property.MaxWidth) => ({ maxWidth: value }),
  /** @alias height */
  h: (value: StyleThemeToken['sizes'] | Property.Height) => ({ height: value }),
  /** @alias minHeight */
  mih: (value: StyleThemeToken['sizes'] | Property.MinHeight) => ({ minHeight: value }),
  /** @alias maxHeight */
  mah: (value: StyleThemeToken['sizes'] | Property.MaxHeight) => ({ maxHeight: value }),
  /** @alias border */
  b: (value: StyleThemeToken['radii'] | Property.Border) => ({ border: value }),
  /** @alias borderRadius 角丸の曲率半径 */
  br: (value: StyleThemeToken['radii'] | Property.BorderRadius) => ({ borderRadius: value }),
  /** @alias borderWidth ボーダーの太さ */
  bw: (value: StyleThemeToken['borderWidths'] | Property.BorderWidth) => ({ borderWidth: value }),
  /** @alias borderStyle ボーダーのスタイル */
  bs: (value: StyleThemeToken['borderStyles'] | Property.BorderStyle) => ({ borderStyle: value }),
  /** @alias borderColor ボーダーの色 */
  bc: (value: ColorToken | Property.Color) => ({ borderColor: value }),
  /** @alias color 文字の色 */
  c: (value: ColorToken | Property.Color) => ({ color: value }),
  /** @alias fontfamily フォントの種類 */
  ff: (value: Property.FontFamily) => ({ fontFamily: value }),
  /** @alias fontSize 文字のサイズ */
  fz: (value: Property.FontSize) => ({ fontSize: value }),
  /** @alias fontWeight 文字の太さ */
  fw: (value: Property.FontWeight) => ({ fontWeight: value }),
  /** @alias textAlign 文字揃えの方向 */
  ta: (value: Property.TextAlign) => ({ textAlign: value }),
  /** @alias letterSpacing 文字同士の横の間隔 */
  lts: (value: StyleThemeToken['letterSpacings'] | Property.LetterSpacing) => ({ letterSpacing: value }),
  /** @alias lineHeight 文字の行ボックスの高さ */
  lh: (value: StyleThemeToken['lineHeights'] | Property.LineHeight) => ({ lineHeight: value }),
  /** @alias fontStile 文字スタイル italic, oblique など */
  fs: (value: Property.FontStyle) => ({ fontStyle: value }),
  /** @alias textTransform テキストの大文字/小文字変換 */
  tt: (value: Property.TextTransform) => ({ textTransform: value }),
  /** @alias textDecoration テキストの装飾 undeline など */
  td: (value: Property.TextDecoration) => ({ textDecoration: value }),
  /** @alias flexDirection */
  fd: (value: Property.FlexDirection) => ({ flexDirection: value }),
  /** @alias justifyContent */
  jc: (value: Property.JustifyContent) => ({ justifyContent: value }),
  /** @alias justifyItems */
  ji: (value: Property.JustifyItems) => ({ justifyItems: value }),
  /** @alias justifySelf */
  js: (value: Property.JustifySelf) => ({ justifySelf: value }),
  /** @alias alignItems */
  ai: (value: Property.AlignItems) => ({ alignItems: value }),
  /** @alias alignContent */
  ac: (value: Property.AlignContent) => ({ alignContent: value }),
  /** @alias alignSelf */
  as: (value: Property.AlignSelf) => ({ alignSelf: value }),
  /** @alias placeContent */
  pc: (value: Property.PlaceContent) => ({ placeContent: value }),
  /** @alias placeItems */
  pi: (value: Property.PlaceItems) => ({ placeItems: value }),
  /** @alias placeSelf */
  ps: (value: Property.PlaceSelf) => ({ placeSelf: value }),
  /** @alias boxShadow */
  shadow: (value: StyleThemeToken['shadows'] | Property.BoxShadow) => ({ boxShadow: value }),
  /** @util グリッドレイアウトを縦に何分割するか決める */
  cols: (value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none') => ({
    gridTemplateColumns: value === 'none' ? 'none' : `repeat(${value}, 1fr)`,
  }),
  /** @util グリッドレイアウトを横に何分割するか決める */
  rows: (value: 1 | 2 | 3 | 4 | 5 | 6 | 'none') => ({
    gridTemplateRows: value === 'none' ? 'none' : `repeat(${value}, 1fr)`,
  }),
  /** @util グリッドの子要素がグリッド(横方向)を何ブロック占めるか指定する */
  colSpan: (value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'full') => {
    if (value === 'auto') return { gridColumn: 'auto' }
    if (value === 'full') return { gridColumn: '1 / -1' }

    return { gridColumn: `span ${value} / span ${value}` }
  },
  /** @util グリッドの子要素がグリッド(縦方向)を何ブロック占めるか指定する */
  rowSpan: (value: 1 | 2 | 3 | 4 | 5 | 6 | 'auto' | 'full') => {
    if (value === 'auto') return { gridRow: 'auto' }
    if (value === 'full') return { gridRow: '1 / -1' }

    return { gridRow: `span ${value} / span ${value}` }
  },
  /** @functional ボタン要素のスタイル */
  __buttonStyle__: ({
    variant = 'default',
    size = 'default',
  }: {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'vanilla'
    size?: 'default' | 'sm' | 'lg'
  }): any => {
    const commonStyle = {
      d: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      br: '$sm',
      fz: '$sm',
      fw: '$bold',
      miw: '40px',
      px: size === 'default' ? '$4' : size === 'sm' ? '$3' : '32px',
      py: size === 'default' ? '$2' : size === 'sm' ? '$1' : '12px',
      mih: size === 'default' ? '$10' : size === 'sm' ? '$9' : '$11',
      td: 'none',
      bw: '2px',
      bs: 'solid',
      ta: 'center',
      transition: 'transform 0.1s ease-in-out',
      cursor: 'pointer',
      outline: 'none',
      '@md': {
        w: 'fit-content',
        '&:focus-visible': {
          outline: '2px solid $focus',
          outlineOffset: '2px',
        },
      },
      '&:disabled': {
        opacity: 0.5,
        pointerEvents: 'none',
        userSelect: 'none',
      },
      '&:active': {
        transform: 'scale(0.96)',
      },
    } as const

    switch (variant) {
      case 'default':
        return {
          ...commonStyle,
          bgc: '$primary',
          bc: '$primary',
          c: '$primaryForeground',
          '&:hover': {
            bgc: '$primaryAlpha',
            bc: '$primaryAlpha',
          },
        }
      case 'destructive':
        return {
          ...commonStyle,
          bgc: '$destructive',
          bc: '$destructive',
          c: '$destructiveForeground',
          '&:hover': {
            bgc: '$destructiveAlpha',
            bc: '$destructiveAlpha',
          },
        }
      case 'secondary':
        return {
          ...commonStyle,
          bgc: '$secondary',
          bc: '$secondary',
          c: '$secondaryForeground',
          '&:hover': {
            bgc: '$secondaryAlpha',
            bc: '$secondaryAlpha',
          },
        }
      case 'outline':
        return {
          ...commonStyle,
          bc: '$accent',
          '&:hover': {
            c: '$accentForeground',
            bc: '$accent',
            bgc: '$accent',
          },
        }
      case 'ghost':
        return {
          ...commonStyle,
          bc: 'transparent',
          '&:hover': {
            bgc: '$accent',
            bc: '$accent',
            c: '$accentForeground',
          },
        }
      case 'vanilla':
        return {
          ...commonStyle,
          minWidth: 'initial',
          minHeight: 'initial',
          padding: 'initial',
          width: 'initial',
          textDecoration: 'initial',
          d: 'block',
          justifyContent: 'initial',
          alignItems: 'initial',
          radius: 'initial',
          borderWidth: 'initial',
          borderStyle: 'initial',
          ta: 'center',
          transition: 'initial',
          cursor: 'pointer',
        }
    }
  },
}
