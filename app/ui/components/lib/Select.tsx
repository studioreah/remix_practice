import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { Box } from 'app/ui/components/layouts'
import { keyframes, styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

const SelectPrimitiveTrigger = styled(SelectPrimitive.Trigger, {
  variants: variantCommon,
})
const SelectPrimitiveIcon = styled(SelectPrimitive.Icon)
const SelectPrimitiveContent = styled(SelectPrimitive.Content, {
  variants: variantCommon,
})
const SelectPrimitiveViewport = styled(SelectPrimitive.Viewport)
const SelectPrimitiveItem = styled(SelectPrimitive.Item, {
  variants: variantCommon,
})

/**
 * @description
 * Select要素をスタイルしたもの
 * https://www.radix-ui.com/docs/primitives/components/select
 */
export const Select = {
  Root: styled(SelectPrimitive.Root, { variants: variantCommon }),
  Group: styled(SelectPrimitive.Group, { variants: variantCommon }),
  Value: styled(SelectPrimitive.Value, { variants: variantCommon }),
  Trigger: forwardRef<
    ElementRef<typeof SelectPrimitiveTrigger>,
    ComponentPropsWithoutRef<typeof SelectPrimitiveTrigger>
  >(({ css, children, ...props }, ref) => (
    <SelectPrimitiveTrigger
      ref={ref}
      css={{
        display: 'flex',
        height: '40px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'between',
        borderRadius: '$md',
        border: '1px solid $accent',
        backgroundColor: 'transparent',
        px: '12px',
        py: '8px',
        fontSize: '$sm',
        '&::placeholder': {
          color: '$mutedForeground',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          opacity: 0.5,
        },
        '&:focus': {
          outline: '2px solid $focus',
          outlineOffset: '2px',
        },
        ...css,
      }}
      {...props}
    >
      {children}
      <SelectPrimitiveIcon asChild css={{ opacity: 0.5, marginLeft: 'auto' }}>
        <ChevronDown size='16px' />
      </SelectPrimitiveIcon>
    </SelectPrimitiveTrigger>
  )),
  Content: forwardRef<
    ElementRef<typeof SelectPrimitiveContent>,
    ComponentPropsWithoutRef<typeof SelectPrimitiveContent>
  >(({ css, children, position = 'popper', ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitiveContent
        ref={ref}
        position={position}
        css={{
          position: 'relative',
          zIndex: 50,
          miw: '128px',
          overflow: 'hidden',
          borderRadius: '$md',
          border: '1px solid $accent',
          backgroundColor: '$background',
          color: '$foreground',
          boxShadow: '$md',
          transform: position === 'popper' ? 'translateY(4px)' : 'none',
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'all',
            '&[data-state="open"]': { animation: `${fadeIn} 200ms ease` },
            '&[data-state="closed"]': { animation: `${fadeOut} 200ms ease` },
          },
          ...css,
        }}
        {...props}
      >
        <SelectPrimitiveViewport
          css={{
            padding: '4px',
            ...(position === 'popper'
              ? {
                  height: 'var(--radix-select-trigger-height)',
                  width: '100%',
                  miw: 'var(--radix-select-trigger-width)',
                }
              : {}),
          }}
        >
          {children}
        </SelectPrimitiveViewport>
      </SelectPrimitiveContent>
    </SelectPrimitive.Portal>
  )),
  Label: styled(SelectPrimitive.Label, {
    variants: variantCommon,
    py: '6px',
    paddingLeft: '32px',
    paddingRight: '8px',
    fontSize: '$sm',
    fontWeight: '$semibold',
  }),
  Item: forwardRef<
    ElementRef<typeof SelectPrimitiveItem>,
    ComponentPropsWithoutRef<typeof SelectPrimitiveItem>
  >(({ css, children, ...props }, ref) => (
    <SelectPrimitiveItem
      ref={ref}
      css={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '$sm',
        py: '6px',
        paddingLeft: '32px',
        paddingRight: '8px',
        fontSize: '$sm',
        outline: 'none',
        '&:focus': {
          backgroundColor: '$accent',
          color: '$accentForeground',
        },
        '&[data-disabled]': {
          opacity: 0.5,
          pointerEvents: 'none',
        },
        ...css,
      }}
      {...props}
    >
      <Box
        as='span'
        css={{
          position: 'absolute',
          left: '8px',
          display: 'flex',
          height: '14px',
          width: '14px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SelectPrimitive.ItemIndicator>
          <Check size='16px' />
        </SelectPrimitive.ItemIndicator>
      </Box>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitiveItem>
  )),
  Separator: styled(SelectPrimitive.Separator, {
    variants: variantCommon,
    mx: '-4px',
    my: '4px',
    height: '1px',
    backgroundColor: '$muted',
  }),
}
