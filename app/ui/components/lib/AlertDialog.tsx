import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { Box } from 'app/ui/components/layouts'
import { keyframes, styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const AlertDialogPrimitivePortal = styled(AlertDialogPrimitive.Portal, {
  variants: variantCommon,
})
const AlertDialogPrimitiveOverlay = styled(AlertDialogPrimitive.Overlay)
const AlertDialogPrimitiveContent = styled(AlertDialogPrimitive.Content)

/**
 * @description アラートダイアログ
 * モーダルUIのうち、外部をクリックしても閉じず。アクションまたはキャンセルを強制的に行わせる場合に使用する。
 * https://www.radix-ui.com/docs/primitives/components/alert-dialog
 * https://ui.shadcn.com/docs/components/alert-dialog
 */
export const AlertDialog = {
  /** アラートダイアログ全体のラッパー open, onOpenChangeなどのpropsによって開閉を担う */
  Root: styled(AlertDialogPrimitive.Root, { variants: variantCommon }),
  /** アラートダイアログONのトリガー */
  Trigger: styled(AlertDialogPrimitive.Trigger, { variants: variantCommon }),
  /** ダイアログの表示コンテンツの親要素、オーバーレイも担当 */
  Content: forwardRef<
    ElementRef<typeof AlertDialogPrimitiveContent>,
    ComponentPropsWithoutRef<typeof AlertDialogPrimitiveContent>
  >(({ css, ...props }, ref) => (
    <AlertDialogPrimitivePortal
      css={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        '@sm': { alignItems: 'center' },
      }}
    >
      <AlertDialogPrimitiveOverlay
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
      <AlertDialogPrimitiveContent
        ref={ref}
        css={{
          position: 'fixed',
          zIndex: 50,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          margin: 'auto',
          display: 'grid',
          width: '100%',
          maxWidth: '512px',
          gap: '16px',
          border: '1px solid $accent',
          backgroundColor: '$background',
          padding: '24px',
          opacity: 1,
          boxShadow: '$lg',
          '@md': {
            width: '100%',
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
      />
    </AlertDialogPrimitivePortal>
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
  Title: styled(AlertDialogPrimitive.Title, {
    variants: variantCommon,
    fontSize: '$lg',
    fontWeight: '$semibold',
  }),
  /** コンテンツの説明 Header内部で利用する */
  Description: styled(AlertDialogPrimitive.Description, {
    variants: variantCommon,
    fontSize: '$sm',
    color: '$mutedForeground',
  }),
  /** 表示コンテンツ下のコンテナ */
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
  /** ダイアログのアクションのトリガー、Footer内部で利用する */
  Action: styled(AlertDialogPrimitive.Action, {
    variants: variantCommon,
    __buttonStyle__: {},
  }),
  /** 操作をキャンセルしダイアログを閉じるトリガー、Footer内部で利用する */
  Cancel: styled(AlertDialogPrimitive.Cancel, {
    variants: variantCommon,
    marginTop: '8px',
    '@md': {
      marginTop: 0,
    },
    __buttonStyle__: {
      variant: 'outline',
    },
  }),
}
