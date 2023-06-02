import { Box } from 'app/ui/components/layouts'
import { keyframes, styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const pulse = keyframes({
  '0%, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.5,
  },
})

/**
 * @description
 * ローディング中に表示するスケルトン要素
 * https://ui.shadcn.com/docs/components/skeleton
 */
export const Skeleton = styled(Box, {
  variants: variantCommon,
  backgroundColor: '$muted',
  borderRadius: '$md',
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
})
