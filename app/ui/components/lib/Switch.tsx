import * as SwitchPrimitive from '@radix-ui/react-switch'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const SwitchPrimitiveRoot = styled(SwitchPrimitive.Root, {
  variants: variantCommon,
})
const SwitchPrimitiveThumb = styled(SwitchPrimitive.Thumb)

/**
 * トグル要素を扱うスイッチボタン
 * @description
 * https://www.radix-ui.com/docs/primitives/components/switch
 */
export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitiveRoot>,
  ComponentPropsWithoutRef<typeof SwitchPrimitiveRoot>
>(({ css, ...props }, ref) => (
  <SwitchPrimitiveRoot
    ref={ref}
    css={{
      display: 'inline-flex',
      height: '24px',
      width: '44px',
      flexShrink: 0,
      cursor: 'pointer',
      alignItems: 'center',
      borderRadius: '9999px',
      border: '2px solid transparent',
      transitionProperty:
        'color, background-color, border-color, text-decoration-color, fill, stroke',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '150ms',
      '&:focus-visible': {
        outline: '2px solid $focus',
        outlineOffset: '2px',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
      '&[data-state="checked"]': {
        backgroundColor: '$primary',
      },
      '&[data-state="unchecked"]': {
        backgroundColor: '$accent',
      },
      ...css,
    }}
    {...props}
  >
    <SwitchPrimitiveThumb
      css={{
        pointerEvents: 'none',
        display: 'block',
        height: '20px',
        width: '20px',
        borderRadius: '9999px',
        backgroundColor: '$background',
        boxShadow: '$lg',
        transitionProperty: 'transform',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
        '&[data-state="checked"]': {
          transform: 'translateX(20px)',
        },
        '&[data-state="unchecked"]': {
          transform: 'translateX(0)',
        },
      }}
    />
  </SwitchPrimitiveRoot>
))
