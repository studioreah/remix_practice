/**
 * @description
 * 要素の配置やコンポーネントの骨組みを設計する基礎コンポーネント。
 */
import { styled } from '~/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'
import { generateSpacingVariants } from 'app/ui/variants/generateVariants'

/**
 * @description
 * divタグを Stitches のstyledで拡張した、もっとも基本的なコンポーネント。
 */
export const Box = styled('div', {
  variants: variantCommon,
})

/**
 * @description
 * ブレイクポイント毎にコンテンツの幅を定するコンポーネント。
 *
 * @param {boolean} center コンテナを画面に対して中央揃えにするか
 */
export const Container = styled(Box, {
  margin: 'auto',
  '@xs': { maxWidth: '576px' },
  '@sm': { maxWidth: '768px' },
  '@md': { maxWidth: '992px' },
  '@lg': { maxWidth: '1200px' },
  '@xl': { maxWidth: '1400px' },
  variants: {
    ...variantCommon,
    center: {
      true: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    },
  },
})

/**
 * @description
 * 子要素を水平方向に均等配置する
 *
 * @param {number} gap gap
 * @param {string} fd flex-direction
 * @param {string} jc justify-content
 * @param {string} ai align-items
 * @param {boolean} wrap 要素の折り返しを許可するか
 */
export const Flex = styled(Box, {
  display: 'flex',
  variants: {
    ...variantCommon,
    gap: generateSpacingVariants({ gap: '$spacing' }),
    /** @alias flexDirection */
    fd: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
      rowReverse: { flexDirection: 'row-reverse' },
      columnReverse: { flexDirection: 'column-reverse' },
    },
    /** @alias justifyContent */
    jc: {
      'flex-start': { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      'flex-end': { justifyContent: 'flex-end' },
      'space-between': { justifyContent: 'space-between' },
      'space-around': { justifyContent: 'space-around' },
      'space-evenly': { justifyContent: 'space-evenly' },
    },
    /** @alias alignItems */
    ai: {
      stretch: { alignItems: 'stretch' },
      'flex-start': { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      'flex-end': { alignItems: 'flex-end' },
      baseline: { alignItems: 'baseline' },
    },
    wrap: { true: { flexWrap: 'wrap' } },
  },
  defaultVariants: {
    ai: 'center',
    fd: 'row',
  },
})

/**
 * @description
 * 子要素を縦方向に均等配置する
 *
 * @param {number} spacing  要素同士の間隔
 * @param {string} fd flex-direction
 * @param {string} jc justify-content
 * @param {string} ai align-items
 * @param {boolean} wrap 要素の折り返しを許可するか
 * @param {boolean} row 横並びにする場合に指定
 * @param {boolean} xs 576px以上で横並びに変更する場合に指定
 * @param {boolean} sm 768px以上で横並びに変更する場合に指定
 * @param {boolean} md 992px以上で横並びに変更する場合に指定
 * @param {boolean} lg 1200px以上で横並びに変更する場合に指定
 * @param {boolean} xl 1400px以上で横並びに変更する場合に指定
 */
export const Stack = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  $$gap: 'initial',
  variants: {
    ...variantCommon,
    /** 横並びにする場合true */
    row: { true: { flexDirection: 'row' } },
    /** ブレイクポイントがxsのときに横並びに変更する */
    xs: { true: { '@xs': { flexDirection: 'row' } } },
    /** ブレイクポイントがsmのときに横並びに変更する */
    sm: { true: { '@sm': { flexDirection: 'row' } } },
    /** ブレイクポイントがmdのときに横並びに変更する */
    md: { true: { '@md': { flexDirection: 'row' } } },
    /** ブレイクポイントがlgのときに横並びに変更する */
    lg: { true: { '@lg': { flexDirection: 'row' } } },
    /** ブレイクポイントがxlのときに横並びに変更する */
    xl: { true: { '@xl': { flexDirection: 'row' } } },
    /** 要素同士の間隔 */
    spacing: generateSpacingVariants({ gap: '$spacing' }),
    /** @alias justifyContent */
    jc: {
      'flex-start': { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      'flex-end': { justifyContent: 'flex-end' },
      'space-between': { justifyContent: 'space-between' },
      'space-around': { justifyContent: 'space-around' },
      'space-evenly': { justifyContent: 'space-evenly' },
    },
    /** @alias alignItems */
    ai: {
      stretch: { alignItems: 'stretch' },
      'flex-start': { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      'flex-end': { alignItems: 'flex-end' },
      baseline: { alignItems: 'baseline' },
    },
    /** 折り返しを許可する場合true */
    wrap: {
      true: { flexWrap: 'wrap' },
    },
  },
  defaultVariants: {
    spacing: 4,
  },
})

/**
 * @description
 * 指定した縦・横幅を持つ要素間の余白として機能する
 *
 * @param {boolean} stretch 要素間いっぱいを埋める幅にするか
 */
export const Space = styled(Box, {
  variants: {
    ...variantCommon,
    stretch: {
      true: {
        flex: '1 1 0%',
        placeSelf: 'stretch',
      },
    },
  },
})

/**
 * @description
 * CSS Gridでレイアウトを組むためのコンポーネント
 *
 * @param {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none'} cols グリッドレイアウトを縦に何分割するか決める
 * @param {1 | 2 | 3 | 4 | 5 | 6 | 'none'} rows グリッドレイアウトを横に何分割するか決める
 * @param {number} autoFlow grid-auto-flow
 * @param {number} autoCols grid-auto-columns
 * @param {number} autorows grid-auto-rows
 * @param {number} gap gap
 * @param {number} columnGap column-gap
 * @param {number} rowGap row-gap
 * @param {@alias} jc justify-content
 * @param {@alias} ac align-content
 * @param {@alias} pc place-content
 * @param {@alias} ji justify-items
 * @param {@alias} ai align-items
 * @param {@alias} pi place-items
 */
export const Grid = styled(Box, {
  display: 'grid',
  variants: {
    ...variantCommon,
    /** @util グリッドレイアウトを縦に何分割するか決める */
    cols: {
      1: { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
      2: { gridTemplateColumns: 'repeat(2, minmax(0, 2fr))' },
      3: { gridTemplateColumns: 'repeat(3, minmax(0, 3fr))' },
      4: { gridTemplateColumns: 'repeat(4, minmax(0, 4fr))' },
      5: { gridTemplateColumns: 'repeat(5, minmax(0, 5fr))' },
      6: { gridTemplateColumns: 'repeat(6, minmax(0, 6fr))' },
      7: { gridTemplateColumns: 'repeat(7, minmax(0, 7fr))' },
      8: { gridTemplateColumns: 'repeat(8, minmax(0, 8fr))' },
      9: { gridTemplateColumns: 'repeat(9, minmax(0, 9fr))' },
      10: { gridTemplateColumns: 'repeat(10, minmax(0, 10fr))' },
      11: { gridTemplateColumns: 'repeat(11, minmax(0, 11fr))' },
      12: { gridTemplateColumns: 'repeat(12, minmax(0, 12fr))' },
      none: { gridTemplateColumns: 'none' },
    },
    /** @util グリッドレイアウトを横に何分割するか決める */
    rows: {
      1: { gridTemplateRows: 'repeat(1, minmax(0, 1fr))' },
      2: { gridTemplateRows: 'repeat(2, minmax(0, 2fr))' },
      3: { gridTemplateRows: 'repeat(3, minmax(0, 3fr))' },
      4: { gridTemplateRows: 'repeat(4, minmax(0, 4fr))' },
      5: { gridTemplateRows: 'repeat(5, minmax(0, 5fr))' },
      6: { gridTemplateRows: 'repeat(6, minmax(0, 6fr))' },
      none: { gridTemplateRows: 'none' },
    },
    autoFlow: {
      row: { gridAutoFlow: 'row' },
      col: { gridAutoFlow: 'column' },
      rowDense: { gridAutoFlow: 'row dense' },
      colDense: { gridAutoFlow: 'column dense' },
    },
    autoCols: {
      auto: { gridAutoColumns: 'auto' },
      min: { gridAutoColumns: 'min-content' },
      max: { gridAutoColumns: 'max-content' },
      fr: { gridAutoColumns: 'minmax(0, 1fr)' },
    },
    autoRows: {
      auto: { gridAutoRows: 'auto' },
      min: { gridAutoRows: 'min-content' },
      max: { gridAutoRows: 'max-content' },
      fr: { gridAutoRows: 'minmax(0, 1fr)' },
    },
    gap: generateSpacingVariants({ gap: '$spacing' }),
    columnGap: generateSpacingVariants({ columnGap: '$spacing' }),
    rowGap: generateSpacingVariants({ rowGap: '$spacing' }),
    /** @alias justifyContent */
    jc: {
      'flex-start': { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      'flex-end': { justifyContent: 'flex-end' },
      'space-between': { justifyContent: 'space-between' },
      'space-around': { justifyContent: 'space-around' },
      'space-evenly': { justifyContent: 'space-evenly' },
      stretch: { justifyContent: 'stretch' },
    },
    /** @alias alignContent */
    ac: {
      'flex-start': { alignContent: 'flex-start' },
      center: { alignContent: 'center' },
      'flex-end': { alignContent: 'flex-end' },
      'space-between': { alignContent: 'space-between' },
      'space-around': { alignContent: 'space-around' },
      'space-evenly': { alignContent: 'space-evenly' },
      stretch: { alignContent: 'stretch' },
    },
    /** @alias placeContent */
    pc: {
      'flex-start': { placeContent: 'flex-start' },
      center: { placeContent: 'center' },
      'flex-end': { placeContent: 'flex-end' },
      'space-between': { placeContent: 'space-between' },
      'space-around': { placeContent: 'space-around' },
      'space-evenly': { placeContent: 'space-evenly' },
      stretch: { placeContent: 'stretch' },
    },
    /** @alias justifyItems */
    ji: {
      start: { justifyItems: 'start' },
      center: { justifyItems: 'center' },
      end: { justifyItems: 'end' },
      stretch: { justifyItems: 'stretch' },
    },
    /** @alias alignItems */
    ai: {
      'flex-start': { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      'flex-end': { alignItems: 'flex-end' },
      baseline: { alignItems: 'baseline' },
      stretch: { alignItems: 'stretch' },
    },
    /** @alias placeItems */
    pi: {
      'flex-start': { placeItems: 'flex-start' },
      center: { placeItems: 'center' },
      'flex-end': { placeItems: 'flex-end' },
      stretch: { placeItems: 'stretch' },
    },
  },
})

/**
 * @description
 * グリッドレイアウトの子要素
 *
 * @param {number | 'full' | 'auto'} flexBasis flex-basis
 * @param {1 | 'auto' | 'initial' | 'none'} flex flex
 * @param {boolean} grow { flexGrow: 1 } を適用する
 * @param {boolean} shrink { flexShrink: 1} を適用する
 * @param {number | 'first' | 'last' | 'none'} order order
 * @param {number | 'auto' | 'full'} colSpan グリッド(横方向)を何ブロック占めるか指定する
 * @param {number | 'auto'} colStart grid-column-start
 * @param {number | 'auto'} colEnd grid-column-end
 * @param {number | 'auto' | 'full'} rowSpan グリッド(縦方向)を何ブロック占めるか指定する
 * @param {number | 'auto'} colEnd grid-column-end
 * @param {number | 'auto'} rowEnd grid-row-end
 */
export const GridItem = styled(Box, {
  variants: {
    ...variantCommon,
    flexBasis: {
      ...generateSpacingVariants({
        flexBasis: '$spacing',
      }),
      full: { flexBasis: '100%' },
      auto: { flexBasis: 'auto' },
    },
    flex: {
      1: { flex: '1 1 0%' },
      auto: { flex: '1 1 auto' },
      initial: { flex: '0 1 auto' },
      none: { flex: 'none' },
    },
    grow: { true: { flexGrow: 1 } },
    shrink: { true: { flexShrink: 1 } },
    order: {
      1: { order: 1 },
      2: { order: 2 },
      3: { order: 3 },
      4: { order: 4 },
      5: { order: 5 },
      6: { order: 6 },
      7: { order: 7 },
      8: { order: 8 },
      9: { order: 9 },
      10: { order: 10 },
      11: { order: 11 },
      12: { order: 12 },
      first: { order: -9999 },
      last: { order: 9999 },
      none: { order: 0 },
    },
    /** @util グリッド(横方向)を何ブロック占めるか指定する */
    colSpan: {
      1: { gridColumn: 'span 1 / span 1' },
      2: { gridColumn: 'span 2 / span 2' },
      3: { gridColumn: 'span 3 / span 3' },
      4: { gridColumn: 'span 4 / span 4' },
      5: { gridColumn: 'span 5 / span 5' },
      6: { gridColumn: 'span 6 / span 6' },
      7: { gridColumn: 'span 7 / span 7' },
      8: { gridColumn: 'span 8 / span 8' },
      9: { gridColumn: 'span 9 / span 9' },
      10: { gridColumn: 'span 10 / span 10' },
      11: { gridColumn: 'span 11 / span 11' },
      12: { gridColumn: 'span 12 / span 12' },
      auto: { gridColumn: 'auto' },
      full: { gridColumn: '1 / -1' },
    },
    colStart: {
      1: { gridColumnStart: 1 },
      2: { gridColumnStart: 2 },
      3: { gridColumnStart: 3 },
      4: { gridColumnStart: 4 },
      5: { gridColumnStart: 5 },
      6: { gridColumnStart: 6 },
      7: { gridColumnStart: 7 },
      8: { gridColumnStart: 8 },
      9: { gridColumnStart: 9 },
      10: { gridColumnStart: 10 },
      11: { gridColumnStart: 11 },
      12: { gridColumnStart: 12 },
      13: { gridColumnStart: 13 },
      auto: { gridColumnStart: 'auto' },
    },
    colEnd: {
      1: { gridColumnEnd: 1 },
      2: { gridColumnEnd: 2 },
      3: { gridColumnEnd: 3 },
      4: { gridColumnEnd: 4 },
      5: { gridColumnEnd: 5 },
      6: { gridColumnEnd: 6 },
      7: { gridColumnEnd: 7 },
      8: { gridColumnEnd: 8 },
      9: { gridColumnEnd: 9 },
      10: { gridColumnEnd: 10 },
      11: { gridColumnEnd: 11 },
      12: { gridColumnEnd: 12 },
      13: { gridColumnEnd: 13 },
      auto: { gridColumnEnd: 'auto' },
    },
    /** @util グリッド(縦方向)を何ブロック占めるか指定する */
    rowSpan: {
      1: { gridRow: 'span 1 / span 1' },
      2: { gridRow: 'span 2 / span 2' },
      3: { gridRow: 'span 3 / span 3' },
      4: { gridRow: 'span 4 / span 4' },
      5: { gridRow: 'span 5 / span 5' },
      6: { gridRow: 'span 6 / span 6' },
      auto: { gridRow: 'auto' },
      full: { gridRow: '1 / -1' },
    },
    rowStart: {
      1: { gridRowStart: 1 },
      2: { gridRowStart: 2 },
      3: { gridRowStart: 3 },
      4: { gridRowStart: 4 },
      5: { gridRowStart: 5 },
      6: { gridRowStart: 6 },
      7: { gridRowStart: 7 },
      auto: { gridRowStart: 'auto' },
    },
    rowEnd: {
      1: { gridRowEnd: 1 },
      2: { gridRowEnd: 2 },
      3: { gridRowEnd: 3 },
      4: { gridRowEnd: 4 },
      5: { gridRowEnd: 5 },
      6: { gridRowEnd: 6 },
      7: { gridRowEnd: 7 },
      auto: { gridRowEnd: 'auto' },
    },
  },
})
