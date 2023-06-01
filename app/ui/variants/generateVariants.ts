/**
 * @description
 * コンポーネントのvariantsに対して複数の要素を持つオブジェクトを作成する関数
 * https://konstantin.digital/blog/generating-stitches-variants-for-theme-colors
 */

import type * as Stitches from '@stitches/react'

import { theme } from '~/ui/stitches.config'

const COLOR_PATTERN = '$color'
const COLOR_REGEX = /\"([^\"]*?\$color[^\"]*?)\"/
const SPACING_PATTERN = '$spacing'
const SPACING_REGEX = /\"([^\"]*?\$spacing[^\"]*?)\"/

/**
 * @description 全ての色トークンをvariantとしたcssオブジェクトを返す
 * @param {Stitches.CSS} css stitchesのCSSオブジェクト。対応させる色を'$color'テンプレートで指定する
 *
 * e.g.
 * generateColorPaletteVariants({ color: '$color' })
 *  => {
 *  primary: { color: "$primary" },
 *  secondary: { color: "$secondary" },
 *  ...
 *  twitter: { color: "$twitter" }
 * }
 */
export const generateColorPaletteVariants = (css: Stitches.CSS) => {
  const cssString = JSON.stringify(css)

  return Object.values(theme.colors).reduce((accumulator, color) => {
    const substringToReplace = COLOR_REGEX.exec(cssString)
    if (!substringToReplace?.length) throw Error('No Color Token provided.')

    const replacedSubstring = substringToReplace[0].replace(
      COLOR_PATTERN,
      `$${color.token}`
    )

    const replacedString = cssString.replace(
      substringToReplace[0],
      replacedSubstring
    )

    return { ...accumulator, [color.token]: JSON.parse(replacedString) }
  }, {}) as Record<keyof typeof theme.colors, Stitches.CSS>
}

/**
 * @description 全てのspacingトークンをvariantとしたcssオブジェクトを返す
 * @param {Stitches.CSS} css stitchesのCSSオブジェクト。対応させるスペースを'$spacing'テンプレートで指定する
 *
 * e.g.
 * generateSpacingVariants({ gap: '$spacing' })
 *  => {
 *  0: { gap: "$0" },
 *  1: { gap: "$1" },
 *  2: { gap: "$2" },
 *  ...
 *  64: { gap: "$64" },
 * }
 */
export const generateSpacingVariants = (css: Stitches.CSS) => {
  const cssString = JSON.stringify(css)

  return Object.values(theme.space).reduce((accumulator, spacing) => {
    const substringToReplace = SPACING_REGEX.exec(cssString)
    if (!substringToReplace?.length) throw Error('No spacing Token provided.')

    const replacedSubstring = substringToReplace[0].replace(
      SPACING_PATTERN,
      `$${spacing.token}`
    )

    const replacedString = cssString.replace(
      substringToReplace[0],
      replacedSubstring
    )

    return { ...accumulator, [spacing.token]: JSON.parse(replacedString) }
  }, {}) as Record<keyof typeof theme.space, Stitches.CSS>
}

/**
 * @description
 * compound variantsのパターンに対応した特殊utilsに当てはめた配列を出力する
 * https://stitches.dev/docs/variants#compound-variants
 * @param {string} utilFn ___xxx__で名づけられたcompound variants用の特殊utilsキー名
 * @param {string[]} variants variantのキーとそれに対応するvariant名のパターン。{ variant名: variantのキー名の配列[] }となるオブジェクト。
 *
 * e.g.
 *  generateCompoundVariants('__buttonStyle__', {
 *   variant: ['dark', 'light'],
 *   color: ['primary', 'secondary', 'gray'],
 *  }) => [
 *   {
 *     variant: 'dark',
 *     color: 'primary',
 *     css: { __buttonStyle__:  {
 *       variant: 'dark',
 *       color: 'primary'
 *       }
 *     }
 *   },
 *   {
 *     variant: 'dark',
 *     color: 'primary',
 *     css: { __buttonStyle__:  {
 *       variant: 'dark',
 *       color: 'secondary'
 *       }
 *     }
 *   },
 *   ...
 * ]
 */
export const generateCompoundVariants = (
  utilFn: string,
  variants: {
    [key: string]: string[]
  }
) => {
  if (Object.keys(variants).length !== 2)
    throw Error('variantsの要素数が2ではありません')

  const [[key1, var1], [key2, var2]] = Object.entries(variants)

  return var2
    .map(v2 =>
      var1.map(v1 => ({
        [key1]: v1,
        [key2]: v2,
        css: { [utilFn]: { [key1]: v1, [key2]: v2 } },
      }))
    )
    .flat() as any
}
