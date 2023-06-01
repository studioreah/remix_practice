import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ChevronDown } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { Box } from 'app/ui/components/layouts'
import { keyframes, styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
})

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
})

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
})

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
})

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

const itemStyles = {
  variants: variantCommon,
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  '&:focus': { position: 'relative', backgroundColor: '$accent' },
  '&:hover': { backgroundColor: '$accent' },
}

const NavigationMenuPrimitiveRoot = styled(NavigationMenuPrimitive.Root, {
  variants: variantCommon,
})
const NavigationMenuPrimitiveViewport = styled(NavigationMenuPrimitive.Viewport)
const NavigationMenuPrimitiveList = styled(NavigationMenuPrimitive.List, {
  variants: variantCommon,
})
const NavigationMenuPrimitiveIndicator = styled(NavigationMenuPrimitive.Indicator)
const NavigationMenuPrimitiveTrigger = styled(NavigationMenuPrimitive.Trigger)

/**
 * @description
 * ナビゲーションメニュー
 * サイトをナビゲートするためのリンク集を表示する
 * https://www.radix-ui.com/docs/primitives/components/navigation-menu
 */
export const NavigationMenu = {
  Root: forwardRef<
    ElementRef<typeof NavigationMenuPrimitiveRoot>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitiveRoot>
  >(({ css, children, ...props }, ref) => {
    return (
      <NavigationMenuPrimitiveRoot
        css={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
          zIndex: 1,
          ...css,
        }}
        ref={ref}
        {...props}
      >
        {children}
        <Box
          // ナビゲーションの位置
          css={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            top: '100%',
            left: 0,
            perspective: '2000px',
          }}
        >
          {/* ナビゲーションのラッパーのスタイル */}
          <NavigationMenuPrimitiveViewport
            css={{
              position: 'relative',
              transformOrigin: 'top center',
              marginTop: 10,
              width: '100%',
              backgroundColor: '$background',
              color: '$foreground',
              borderRadius: 6,
              overflow: 'hidden',
              boxShadow: '$xs',
              border: 'solid 1px $accent',
              height: 'var(--radix-navigation-menu-viewport-height)',
              '@media only screen and (min-width: 600px)': {
                width: 'var(--radix-navigation-menu-viewport-width)',
              },
              '@media (prefers-reduced-motion: no-preference)': {
                transition: 'width, height, 300ms ease',
                '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
                '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
              },
            }}
          />
        </Box>
      </NavigationMenuPrimitiveRoot>
    )
  }),
  /** メニューの要素群をまとめるリスト */
  List: forwardRef<
    ElementRef<typeof NavigationMenuPrimitiveList>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitiveList> & {
      /** ナビゲーションとトリガーを示す矢印部分のスタイル */
      indicatorCss?: any
    }
  >(({ css, children, indicatorCss, ...props }, ref) => {
    return (
      <NavigationMenuPrimitiveList
        css={{
          all: 'unset',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '$background',
          padding: 4,
          borderRadius: 6,
          listStyle: 'none',
          ...css,
        }}
        ref={ref}
        {...props}
      >
        {children}
        {/* ナビゲーションとトリガーを示す矢印のようなもの */}
        <NavigationMenuPrimitiveIndicator
          css={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            height: 10,
            top: '100%',
            width: 'min-content',
            zIndex: 2,
            '@media (prefers-reduced-motion: no-preference)': {
              transition: 'width, transform 250ms ease',
              '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
              '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
            },
            ...indicatorCss,
          }}
        >
          <Box
            css={{
              position: 'relative',
              backgroundColor: '$background',
              borderTop: 'solid 1px $accent',
              borderLeft: 'solid 1px $accent',
              width: '12px',
              height: '12px',
              transform: 'rotate(45deg)',
              borderTopLeftRadius: 2,
              top: '70%',
              zIndex: 20,
            }}
          />
        </NavigationMenuPrimitiveIndicator>
      </NavigationMenuPrimitiveList>
    )
  }),
  /** メニューの要素。中にトリガーとコンテンツを持つ */
  Item: styled(NavigationMenuPrimitive.Item, { variants: variantCommon }),
  Trigger: forwardRef<
    ElementRef<typeof NavigationMenuPrimitiveTrigger>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitiveTrigger>
  >(({ css, children, ...props }, ref) => {
    return (
      <NavigationMenuPrimitiveTrigger
        css={{
          ...itemStyles,
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          ...css,
        }}
        ref={ref}
        {...props}
      >
        {children}
        <Box
          as='span'
          css={{
            '.lucide-chevron-down': {
              marginLeft: '6px',
              position: 'relative',
              color: '$primary',
              top: 1,
              '[data-state=open] &': { transform: 'rotate(-180deg)' },
              '@media (prefers-reduced-motion: no-preference)': {
                transition: 'transform 250ms ease',
              },
            },
          }}
        >
          <ChevronDown size='12px' aria-hidden />
        </Box>
      </NavigationMenuPrimitiveTrigger>
    )
  }),
  Link: styled(NavigationMenuPrimitive.Link, {
    ...itemStyles,
    display: 'block',
    textDecoration: 'none',
    fontSize: 15,
    lineHeight: 1,
  }),
  Content: styled(NavigationMenuPrimitive.Content, {
    variants: variantCommon,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    '@media only screen and (min-width: 600px)': { width: 'auto' },
    '@media (prefers-reduced-motion: no-preference)': {
      animationDuration: '250ms',
      animationTimingFunction: 'ease',
      '&[data-motion="from-start"]': { animationName: enterFromLeft },
      '&[data-motion="from-end"]': { animationName: enterFromRight },
      '&[data-motion="to-start"]': { animationName: exitToLeft },
      '&[data-motion="to-end"]': { animationName: exitToRight },
    },
  }),
}
