import * as PopoverPrimitive from '@radix-ui/react-popover'
import { X } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { keyframes, styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-8px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(8px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const PopoverPrimitiveContent = styled(PopoverPrimitive.Content, {
  variants: variantCommon,
})
const PopoverPrimitiveArrow = styled(PopoverPrimitive.Arrow)
const PopoverPrimitiveClose = styled(PopoverPrimitive.Close)

/**
 * @description
 * クリックをトリガーに浮かんでくる要素
 * https://www.radix-ui.com/docs/primitives/components/popover
 */
export const Popover = {
  Root: styled(PopoverPrimitive.Root, { variants: variantCommon }),
  Anchor: styled(PopoverPrimitive.Anchor, { variants: variantCommon }),
  Trigger: styled(PopoverPrimitive.Trigger, {
    variants: variantCommon,
    '&:hover': {
      cursor: 'pointer',
    },
    '&:focus-visible': {
      outline: '2px solid $focus',
      outlineOffset: '2px',
    },
  }),
  Content: forwardRef<
    ElementRef<typeof PopoverPrimitiveContent>,
    ComponentPropsWithoutRef<typeof PopoverPrimitiveContent>
  >(({ css, align = 'center', sideOffset = 4, children, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitiveContent
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        css={{
          zIndex: 50,
          width: '288px',
          borderRadius: '$md',
          backgroundColor: '$background',
          color: '$foreground',
          border: '1px solid $accent',
          boxShadow: '$md',
          outline: 'none',
          '@media (prefers-reduced-motion: no-preference)': {
            animationDuration: '400ms',
            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform, opacity',
            '&[data-state="open"]': {
              '&[data-side="top"]': { animationName: slideDownAndFade },
              '&[data-side="right"]': { animationName: slideLeftAndFade },
              '&[data-side="bottom"]': { animationName: slideUpAndFade },
              '&[data-side="left"]': { animationName: slideRightAndFade },
            },
          },
          ...css,
        }}
        {...props}
      >
        {children}
        <PopoverPrimitiveClose
          aria-label='Close'
          css={{
            all: 'unset',
            fontFamily: 'inherit',
            borderRadius: '100%',
            height: '32px',
            width: '32px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '$primary',
            position: 'absolute',
            top: '8px',
            right: '8px',
            cursor: 'pointer',
            '&:hover': { backgroundColor: '$accent' },
            '&:focus': { outline: '2px solid $focus', outlineOffset: '2px' },
          }}
        >
          <X size='16px' />
        </PopoverPrimitiveClose>
        <PopoverPrimitiveArrow
          css={{
            fill: '$background',
            backgroundColor: '$background',
            borderRight: 'solid 1px $accent',
            borderBottom: 'solid 1px $accent',
            transform: 'rotate(45deg)',
            width: '8px',
            height: '8px',
            marginTop: '-4px',
          }}
        />
      </PopoverPrimitiveContent>
    </PopoverPrimitive.Portal>
  )),
}
