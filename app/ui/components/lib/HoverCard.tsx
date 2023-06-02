import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { keyframes, styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const HoverCardPrimitiveContent = styled(HoverCardPrimitive.Content, {
  variants: variantCommon,
})

/**
 * @description
 * トリガーの上でマウスをホバーすると表示される情報カード
 * https://www.radix-ui.com/docs/primitives/components/hover-card
 */
export const HoverCard = {
  Root: styled(HoverCardPrimitive.Root, { variants: variantCommon }),
  Trigger: styled(HoverCardPrimitive.Trigger, { variants: variantCommon }),
  Content: forwardRef<
    ElementRef<typeof HoverCardPrimitiveContent>,
    ComponentPropsWithoutRef<typeof HoverCardPrimitiveContent>
  >(({ css, align = 'center', sideOffset = 4, ...props }, ref) => (
    <HoverCardPrimitiveContent
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      css={{
        zIndex: 50,
        width: '256px',
        borderRadius: '$md',
        border: 'solid 1px $accent',
        backgroundColor: '$background',
        color: '$foreground',
        boxShadow: '$md',
        outline: 'none',
        transitionProperty: 'opacity, transform',
        '@media (prefers-reduced-motion: no-preference)': {
          '&[data-state="open"]': {
            animation: `${keyframes({
              '0%': { opacity: 0, transform: 'scale(0.9)' },
              '100%': { opacity: 1, transform: 'scale(1)' },
            })} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          },
          '&[data-state="closed"]': {
            animation: `${keyframes({
              '0%': { opacity: 0.9, transform: 'scale(1)' },
              '100%': { opacity: 0, transform: 'scale(0.9)' },
            })} 50ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          },
        },
        ...css,
      }}
      {...props}
    />
  )),
}
