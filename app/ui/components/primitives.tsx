/**
 * @description
 * ピュアなHTML要素をstitchesで拡張したコンポーネントを定義する
 */
import * as LabelPrimitive from '@radix-ui/react-label'

import { styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'
import { generateCompoundVariants } from 'app/ui/variants/generateVariants'

export const Text = styled('p', {
  variants: variantCommon,
})
export const Span = styled('span', {
  variants: variantCommon,
})
export const Button = styled('button', {
  variants: {
    ...variantCommon,
    variant: {
      default: {},
      destructive: {},
      secondary: {},
      outline: {},
      ghost: {},
      vanilla: {},
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
  // utilsの__buttonStyle__を利用する。
  compoundVariants: generateCompoundVariants('__buttonStyle__', {
    variant: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'vanilla'],
    size: ['default', 'sm', 'lg'],
  }),
  defaultVariants: { size: 'default', variant: 'default' },
})
export const A = styled('a', {
  '&:hover': {
    cursor: 'pointer',
  },
  variants: variantCommon,
})

export const Img = styled('img', {
  variants: variantCommon,
})
export const Form = styled('form', {
  variants: variantCommon,
})
export const Fieldset = styled('fieldset', {
  variants: variantCommon,
})
/**
 * ラベル要素はradixのコンポーネントを用いる
 * https://www.radix-ui.com/docs/primitives/components/label
 */
export const Label = styled(LabelPrimitive.Root, {
  userSelect: 'none',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$none',
  variants: variantCommon,
})
export const Input = styled('input', {
  d: 'flex',
  h: '40px',
  w: '100%',
  br: '$md',
  b: 'solid 1px $accent',
  bgc: 'transparent',
  px: '12px',
  py: '8px',
  fz: '$sm',
  '[type="file"]': { b: 'none', fz: '$medium' },
  '&::placeholder': {
    c: '$mutedForeground',
  },
  '&:focus-visible': {
    outline: '2px solid $focus',
    outlineOffset: '2px',
  },
  '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
  variants: variantCommon,
})
export const Textarea = styled('textarea', {
  d: 'flex',
  h: '$20',
  w: '100%',
  br: '$md',
  b: 'solid 1px $accent',
  bgc: 'transparent',
  px: '12px',
  py: '8px',
  fz: '$sm',
  '&::placeholder': {
    c: '$mutedForeground',
  },
  '&:focus-visible': {
    outline: '2px solid $focus',
    outlineOffset: '2px',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  variants: variantCommon,
})
export const Table = styled('table', {
  variants: variantCommon,
})
export const Ul = styled('ul', {
  variants: variantCommon,
})
export const Li = styled('li', {
  variants: variantCommon,
})
