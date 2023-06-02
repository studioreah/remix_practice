import * as TogglePrimitive from '@radix-ui/react-toggle'

import { styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'
/**
 * @description
 * ONのときに背景色のつくインタラクション要素
 * https://www.radix-ui.com/docs/primitives/components/toggle
 */
export const Toggle = styled(TogglePrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$md',
  fontWeight: '$medium',
  transitionProperty:
    'color, background-color, border-color, text-decoration-color, fill, stroke',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
  '&[data-state=on]': {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },
  '&:focus-visible': {
    outline: '2px solid $focus',
    outlineOffset: '2px',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  '&:hover': {
    backgroundColor: '$muted',
    color: '$mutedForeground',
    cursor: 'pointer',
  },
  variants: {
    ...variantCommon,
    variant: {
      default: {
        backgroundColor: 'transparent',
      },
      outline: {
        backgroundColor: 'transparent',
        border: '1px solid $accent',
        '&:hover': {
          backgroundColor: '$accent',
          color: '$accentForeground',
        },
      },
    },
    size: {
      default: {
        height: '40px',
        px: '12px',
      },
      sm: {
        height: '36px',
        px: '10px',
      },
      lg: {
        height: '44px',
        px: '20px',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})
