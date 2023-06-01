import { Box } from 'app/ui/components/layouts'
import { Text } from 'app/ui/components/primitives'
import { styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'
/**
 * @description カード型UI
 * ヘッダー(タイトル・説明)・コンテンツ・フッターを持つ
 * https://ui.shadcn.com/docs/components/card
 */
export const Card = {
  Root: styled(Box, {
    variants: variantCommon,
    borderRadius: '$lg',
    border: '1px solid $accent',
    backgroundColor: '$background',
    color: '$foreground',
    boxShadow: '$sm',
  }),
  Header: styled(Box, {
    variants: variantCommon,
    display: 'flex',
    flexDirection: 'column',
    spaceY: '6px',
    padding: '24px',
  }),
  Title: styled(Text, {
    variants: variantCommon,
    fontSize: '$lg',
    fontWeight: '$semibold',
    lineHeight: 1,
    lts: '$sm',
  }),
  Description: styled(Text, {
    variants: variantCommon,
    fontSize: '$sm',
    color: '$mutedForeground',
  }),
  Content: styled(Box, {
    variants: variantCommon,
    padding: '24px',
    pt: 0,
  }),
  Footer: styled(Box, {
    variants: variantCommon,
    display: 'flex',
    alignItems: 'center',
    padding: '24px',
    pt: 0,
  }),
}
