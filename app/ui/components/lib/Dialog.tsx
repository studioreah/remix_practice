import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { Box } from 'app/ui/components/layouts'
import { keyframes, styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const DialogPrimitivePortal = styled(DialogPrimitive.Portal)
const DialogPrimitiveOverlay = styled(DialogPrimitive.Overlay)
const DialogPrimitiveContent = styled(DialogPrimitive.Content, {
  variants: variantCommon,
})
const DialogPrimitiveClose = styled(DialogPrimitive.Close)

/**
 * @description ダイアログ
 * モーダルともいう
 * https://www.radix-ui.com/docs/primitives/components/dialog
 * https://ui.shadcn.com/docs/components/dialog
 */
export const Dialog = {
  /** モーダルのコンテナ、open,onOpenChangeといったpropsで開閉を担う */
  Root: styled(DialogPrimitive.Root, { variants: variantCommon }),
  /*: モーダルONのトリガーになる要素 */
  Trigger: styled(DialogPrimitive.Trigger, { variants: variantCommon }),
  /** モーダル表示コンテンツの親要素、オーバーレイも担当 */
  Content: forwardRef<
    ElementRef<typeof DialogPrimitiveContent>,
    ComponentPropsWithoutRef<typeof DialogPrimitiveContent>
  >(({ css, children, ...props }, ref) => (
    <DialogPrimitivePortal>
      <Box
        css={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          '@sm': {
            alignItems: 'center',
          },
        }}
      >
        <DialogPrimitiveOverlay
          css={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            backdropFilter: 'blur(4px)',
            backgroundColor: '$backgroundAlpha',
            '&[data-state="open"]': {
              opacity: 1,
            },
            '&[data-state="closed"]': {
              opacity: 0,
            },
            '@media (prefers-reduced-motion: no-preference)': {
              animation: `${keyframes({
                '0%': { opacity: 0 },
                '100%': { opacity: 1 },
              })} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            },
          }}
        />
        <DialogPrimitiveContent
          ref={ref}
          css={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 50,
            display: 'grid',
            width: '100%',
            maxWidth: '90%',
            gap: '16px',
            borderBottomRightRadius: '$lg',
            borderBottomLeftRadius: '$lg',
            border: '1px solid $accent',
            backgroundColor: '$background',
            padding: '24px',
            boxShadow: '$lg',
            opacity: 0,
            transitionProperty: 'opacity, transform',
            '@sm': {
              maxWidth: '512px',
              borderRadius: '$lg',
            },
            '@media (prefers-reduced-motion: no-preference)': {
              animation: `${keyframes({
                '0%': { opacity: 0, transform: 'translate(-50%, -45%) scale(.90)' },
                '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
              })} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            },
            ...css,
          }}
          {...props}
        >
          {children}
          <DialogPrimitiveClose
            css={{
              position: 'absolute',
              right: '16px',
              top: '16px',
              borderRadius: '$sm',
              opacity: 0.7,
              cursor: 'pointer',
              py: '4px',
              px: '8px',
              '&:hover': {
                opacity: 1,
                backgroundColor: '$accent',
              },
              '&[data-state="open"]': {
                backgroundColor: '$accent',
                color: '$mutedForeground',
              },
              '&[data-state="closed"]': {
                backgroundColor: 'transparent',
                color: '$foreground',
              },
            }}
          >
            <X size='16px' />
          </DialogPrimitiveClose>
        </DialogPrimitiveContent>
      </Box>
    </DialogPrimitivePortal>
  )),
  /** 表示コンテンツ上部のコンテナ */
  Header: styled(Box, {
    variants: variantCommon,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textAlign: 'center',
    '@sm': {
      textAlign: 'left',
    },
  }),
  /** コンテンツのタイトル Header内部で利用する */
  Title: styled(DialogPrimitive.Title, {
    variants: variantCommon,
    fontSize: '$lg',
    fontWeight: '$semibold',
  }),
  /** コンテンツの説明 Header内部で利用する */
  Description: styled(DialogPrimitive.Description, {
    variants: variantCommon,
    fontSize: '$sm',
    color: '$mutedForeground',
  }),
  /** 表示コンテンツ下のコンテナ。ボタンなどを配置する。 */
  Footer: styled(Box, {
    variants: variantCommon,
    display: 'flex',
    flexDirection: 'column-reverse',
    '@sm': {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: '8px',
    },
  }),
}
