import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { Box } from 'app/ui/components/layouts'
import { keyframes, styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const ContextMenuPrimitiveContent = styled(ContextMenuPrimitive.Content, {
  variants: variantCommon,
})
const ContextMenuPrimitivePortal = styled(ContextMenuPrimitive.Portal)
const ContextMenuPrimitiveItem = styled(ContextMenuPrimitive.Item, {
  variants: variantCommon,
})
const ContextMenuPrimitiveCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, {
  variants: variantCommon,
})
const ContextMenuPrimitiveRadioItem = styled(ContextMenuPrimitive.RadioItem, {
  variants: variantCommon,
})
const ContextMenuPrimitiveLabel = styled(ContextMenuPrimitive.Label, {
  variants: variantCommon,
})
const ContextMenuPrimitiveSubTrigger = styled(ContextMenuPrimitive.SubTrigger, {
  variants: variantCommon,
})

/**
 * @description コンテキストメニュー
 * 右クリック時に表示されるメニュー
 * https://www.radix-ui.com/docs/primitives/components/context-menu
 * https://ui.shadcn.com/docs/components/context-menu
 */
export const ContextMenu = {
  /** メニュー要素のコンテナ */
  Root: styled(ContextMenuPrimitive.Root, { variants: variantCommon }),
  /** メニューを開閉するトリガー */
  Trigger: styled(ContextMenuPrimitive.Trigger, { variants: variantCommon }),
  /** メニュー要素のラッパー */
  Content: forwardRef<
    ElementRef<typeof ContextMenuPrimitiveContent>,
    ComponentPropsWithoutRef<typeof ContextMenuPrimitiveContent>
  >(({ css, ...props }, ref) => (
    <ContextMenuPrimitivePortal>
      <ContextMenuPrimitiveContent
        ref={ref}
        css={{
          zIndex: 50,
          miw: '8px',
          overflow: 'hidden',
          borderRadius: '$sm',
          border: 'solid 1px',
          borderColor: '$accent',
          backgroundColor: '$background',
          boxShadow: '$md',
          padding: '4px',
          '@media (prefers-reduced-motion: no-preference)': {
            animation: `${keyframes({
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            })} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          },
          ...css,
        }}
        {...props}
      />
    </ContextMenuPrimitivePortal>
  )),
  /** メニューの各段の要素 */
  Item: forwardRef<
    ElementRef<typeof ContextMenuPrimitiveItem>,
    ComponentPropsWithoutRef<typeof ContextMenuPrimitiveItem> & {
      inset?: boolean
    }
  >(({ css, inset, ...props }, ref) => (
    <ContextMenuPrimitiveItem
      ref={ref}
      css={{
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '$sm',
        py: '6px',
        paddingRight: '8px',
        paddingLeft: inset ? '28px' : '8px',
        fontSize: '$xs',
        outline: '2px solid transparent',
        outlineOffset: '2px',
        '&:focus': {
          backgroundColor: '$accent',
          color: '$accentForeground',
          cursor: 'pointer',
        },
        '&[data-disabled]': {
          opacity: 0.5,
          pointerEvents: 'none',
        },
        ...css,
      }}
      {...props}
    />
  )),
  /** メニューの各段の要素のうち、チェックON/OFFが表示されるもの */
  CheckboxItem: forwardRef<
    ElementRef<typeof ContextMenuPrimitiveCheckboxItem>,
    ComponentPropsWithoutRef<typeof ContextMenuPrimitiveCheckboxItem>
  >(({ css, children, checked, ...props }, ref) => (
    <ContextMenuPrimitiveCheckboxItem
      ref={ref}
      checked={checked}
      css={{
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '$sm',
        py: '6px',
        paddingRight: '8px',
        paddingLeft: '28px',
        fontSize: '$xs',
        outline: '2px solid transparent',
        outlineOffset: '2px',
        '&:focus': {
          backgroundColor: '$accent',
          color: '$accentForeground',
          cursor: 'pointer',
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
          height: '12px',
          width: '12px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ContextMenuPrimitive.ItemIndicator>
          <Check size='12px' />
        </ContextMenuPrimitive.ItemIndicator>
      </Box>
      {children}
    </ContextMenuPrimitiveCheckboxItem>
  )),
  /** メニューの各段の要素のうち、radio的にチェックマークがつくもの。グループ化して用いる */
  RadioItem: forwardRef<
    ElementRef<typeof ContextMenuPrimitiveRadioItem>,
    ComponentPropsWithoutRef<typeof ContextMenuPrimitiveRadioItem>
  >(({ css, children, ...props }, ref) => (
    <ContextMenuPrimitiveRadioItem
      ref={ref}
      css={{
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '$sm',
        py: '6px',
        paddingRight: '8px',
        paddingLeft: '28px',
        fontSize: '$xs',
        outline: '2px solid transparent',
        outlineOffset: '2px',
        '&:focus': {
          backgroundColor: '$accent',
          color: '$accentForeground',
          cursor: 'pointer',
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
          height: '12px',
          width: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          '.circle': {
            fill: 'currentColor',
            pt: '0.5px',
          },
        }}
      >
        <ContextMenuPrimitive.ItemIndicator>
          <Circle size='8px' className='circle' />
        </ContextMenuPrimitive.ItemIndicator>
      </Box>
      {children}
    </ContextMenuPrimitiveRadioItem>
  )),
  /** メニューの要素のうちラベル機能を持つもの、hover/clickしたときのアクションはない */
  Label: forwardRef<
    ElementRef<typeof ContextMenuPrimitiveLabel>,
    ComponentPropsWithoutRef<typeof ContextMenuPrimitiveLabel> & {
      inset?: boolean
    }
  >(({ css, inset, ...props }, ref) => (
    <ContextMenuPrimitiveLabel
      ref={ref}
      css={{
        paddingRight: '8px',
        py: '6px',
        fontSize: '$xs',
        fontWeight: '$semibold',
        color: '$foreground',
        paddingLeft: inset ? '28px' : '8px',
        ...css,
      }}
      {...props}
    />
  )),
  /** メニュー要素の横線 要素をブロック分けするときに用いる */
  Separator: styled(ContextMenuPrimitive.Separator, {
    mx: '-4px',
    my: '4px',
    height: '1px',
    backgroundColor: '$accent',
  }),
  /** メニュー各要素の右側に配置される要素。アイコンなど */
  Shortcut: forwardRef<
    ElementRef<typeof Box>,
    ComponentPropsWithoutRef<typeof Box>
  >(({ css, ...props }, ref) => (
    <Box
      ref={ref}
      css={{
        marginLeft: 'auto',
        fontSize: '$xs',
        letterSpacing: '0.1em',
        color: '$mutedForeground',
        ...css,
      }}
      as='span'
      {...props}
    />
  )),
  /** 要素をグループ化する際に用いる */
  Group: styled(ContextMenuPrimitive.Group, { variants: variantCommon }),
  /** RadioItemを含む要素はこれでラップする。 */
  RadioGroup: styled(ContextMenuPrimitive.RadioGroup, { variants: variantCommon }),
  /** サブメニューのコンテナ */
  Sub: styled(ContextMenuPrimitive.Sub, { variants: variantCommon }),
  /** サブメニュー要素のラッパー */
  SubContent: styled(ContextMenuPrimitive.SubContent, {
    variants: variantCommon,
    zIndex: 50,
    miw: '8px',
    overflow: 'hidden',
    borderRadius: '$sm',
    border: 'solid 1px',
    borderColor: '$accent',
    backgroundColor: '$background',
    padding: '4px',
    boxShadow: '$md',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${keyframes({
        '0%': { opacity: 0, transform: 'translate(-16px)' },
        '100%': { opacity: 1, transform: 'translate(0)' },
      })} 120ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
  }),
  /** サブメニュー開閉のトリガー、hover時にSubContentを表示する */
  SubTrigger: forwardRef<
    ElementRef<typeof ContextMenuPrimitiveSubTrigger>,
    ComponentPropsWithoutRef<typeof ContextMenuPrimitiveSubTrigger> & {
      inset?: boolean
    }
  >(({ css, inset, children, ...props }, ref) => (
    <ContextMenuPrimitiveSubTrigger
      ref={ref}
      css={{
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '$sm',
        py: '6px',
        paddingRight: '8px',
        paddingLeft: inset ? '28px' : '8px',
        fontSize: '$xs',
        outline: '2px solid transparent',
        outlineOffset: '2px',
        '&:focus': {
          backgroundColor: '$accent',
          color: '$accentForeground',
        },
        '&[data-state="open"]': {
          backgroundColor: '$accent',
          color: '$accentForeground',
        },
        ...css,
      }}
      {...props}
    >
      {children}
      <ChevronRight size='12px' className='ml-auto' />
    </ContextMenuPrimitiveSubTrigger>
  )),
}
