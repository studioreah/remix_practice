import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const CheckboxPrimitiveRoot = styled(CheckboxPrimitive.Root, {
  variants: variantCommon,
})
const CheckboxPrimitiveIndicator = styled(CheckboxPrimitive.Indicator)

/**
 * @description
 * チェックボックスUI
 * https://www.radix-ui.com/docs/primitives/components/checkbox
 * https://ui.shadcn.com/docs/components/checkbox
 */
export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitiveRoot>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitiveRoot>
>(({ css, ...props }, ref) => (
  <CheckboxPrimitiveRoot
    ref={ref}
    css={{
      all: 'unset',
      height: '16px',
      width: '16px',
      flexShrink: 0,
      border: '1px solid',
      borderRadius: '$sm',
      borderColor: '$primary',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': { borderColor: '$primaryAlpha', cursor: 'pointer' },
      '&:active': {
        transform: 'scale(0.98)',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
        '~ label': {
          cursor: 'not-allowed',
          opacity: 0.5,
        },
      },
      '&[data-state="checked"]': {
        color: '$primaryForeground',
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
      '&:focus-visible': {
        outline: '2px solid $focus',
        outlineOffset: '2px',
      },
      ...css,
    }}
    {...props}
  >
    <CheckboxPrimitiveIndicator
      css={{ pt: '4px', 'lucide-check': { stroke: 'currentColor' } }}
    >
      <Check size='16px' />
    </CheckboxPrimitiveIndicator>
  </CheckboxPrimitiveRoot>
))
