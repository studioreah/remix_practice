import { Property } from '@stitches/react/types/css'

import { mediaQueries } from './mediaQuery'

/**
 * @description
 * アプリで用いる文字スタイルのトークンを定義する。
 * stitchesに追加したutil typography によって、トークンからスタイルを適用できる。
 *
 * @todo
 * アプリの文字デザインシステムが決まるまで、文字トークンは使わず。要素毎のグローバルCSSとユーティリティトークンでスタイルを行う。
 * トークンとそのスタイル値が決定したら、以下の実装を行う
 * 1. typographyThemeにスタイルオブジェクトを定義
 * 2. utilsにtypographyを追加。css propsでtypographyを指定できるようにする
 *    typography: (value: `$${keyof typeof typographyTheme}`) => value
 * 3. 各種コンポーネントのvariantsにtypographyを追加
 *
 */
export const typographyTheme = {}

export type TypographyValue = TextStyle & {
  [key in `@${keyof typeof mediaQueries}`]?: TextStyle
}

type TextStyle = {
  fontWeight?: Property.FontWeight
  fontFamily?: Property.FontFamily
  fontSize?: Property.FontSize
  lineHeight?: Property.LineHeight
  letterSpacing?: Property.LetterSpacing
}
