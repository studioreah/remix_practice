/**
 * @description
 * stitchesのカラートークンをテーマ毎に定義する
 * https://stitches.dev/docs/theming
 *
 * @note
 * トークンはデザインシステムの制作
 * 現在は仮の段階として 役割に応じた名前をつけ、背景色・描画色・透明色などを必要に応じて定義する
 */

// テーマに関係なく使用する色
const common = {
  black: '#000000',
  white: '#FFFFFF',
  twitter: '#00ACEE',
  facebook: '#1778F2',
  line: '#00B900',
}

export const lightThemePalette = {
  ...common,

  /** アプリの背景に適用する色 */
  background: 'hsl(0, 0%, 100%)',
  backgroundAlpha: 'hsla(0, 0%, 100%, 0.8)',
  foreground: 'hsl(222, 48%, 11%)',
  foregroundAlpha: 'hsl(222, 48%, 11%, 0.8)',

  /** アプリの背景色に薄めのコントラストを与える色 */
  accent: 'hsl(210, 40%, 92%)',
  accentAlpha: 'hsla(210, 40%, 92%, 0.7)',
  accentForeground: 'hsl(222, 47%, 11%)',

  /** UIのベースカラー */
  primary: 'hsl(222, 47%, 11%)',
  primaryAlpha: 'hsla(222, 47%, 11%, 0.8)',
  primaryForeground: 'hsl(210, 40%, 98%)',

  /** UIのサブカラー */
  secondary: 'hsl(210, 40%, 96%)',
  secondaryAlpha: 'hsla(210, 40%, 96%, 0.8)',
  secondaryForeground: 'hsl(222, 47%, 11%)',

  /** 警告色 */
  destructive: 'hsl(0, 100%, 50%)',
  destructiveAlpha: 'hsla(0, 100%, 50%, 0.8)',
  destructiveForeground: 'hsl(210, 40%, 98%)',

  /** 注釈となる薄めの文字や操作できないUIの色 */
  muted: 'hsl(210, 40%, 96%)',
  mutedAlpha: 'hsla(210, 40%, 96%, 0.8)',
  mutedForeground: 'hsl(215, 16%, 47%)',

  // インタラクティブ要素がフォーカスされたときのアウトラインの色。
  focus: 'hsl(215, 20%, 65%)',
} as const

export const darkThemePalette: {
  [key in keyof typeof lightThemePalette]: string
} = {
  ...common,

  /** アプリの背景に適用する色 */
  background: 'hsl(224, 71%, 4%)',
  backgroundAlpha: 'hsla(224, 71%, 4%, 0.8)',
  foreground: 'hsl(213, 31%, 91%)',
  foregroundAlpha: 'hsl(213, 31%, 91%, 0.8)',

  /** アプリの背景色に薄めのコントラストを与える色 */
  accent: 'hsl(216, 34%, 17%)',
  accentForeground: 'hsl(210, 40%, 98%)',
  accentAlpha: 'hsla(216, 34%, 17%, 0.7)',

  /** UIのベースカラー */
  primary: 'hsl(210, 40%, 98%)',
  primaryAlpha: 'hsla(210, 40%, 98%, 0.8)',
  primaryForeground: 'hsl(222, 47%, 1%)',

  /** UIのサブカラー */
  secondary: 'hsl(222, 47%, 11%)',
  secondaryForeground: 'hsl(210, 40%, 98%)',
  secondaryAlpha: 'hsla(222, 47%, 11%, 0.8)',

  /** 警告色 */
  destructive: 'hsl(0, 63%, 31%)',
  destructiveAlpha: 'hsla(0, 63%, 31%, 0.8)',
  destructiveForeground: 'hsl(210, 40%, 98%)',

  /** 注釈となる薄めの文字や操作できないUIの色 */
  muted: 'hsl(223, 47%, 11%)',
  mutedAlpha: 'hsla(223, 47%, 11%, 0.8)',
  mutedForeground: 'hsl(215, 16%, 57%)',

  // インタラクティブ要素がフォーカスされたときのアウトラインの色。
  focus: 'hsl(216, 34%, 17%)',
} as const

export type ColorToken = `$${keyof typeof lightThemePalette}`
