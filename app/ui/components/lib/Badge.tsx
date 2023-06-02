import { Box } from 'app/ui/components/layouts'
import { styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'
/**
 * @description
 * タグなど表示するバッジ
 * https://ui.shadcn.com/docs/components/badge
 */
export const Badge = styled(Box, {
  display: 'inline-flex',
  alignItems: 'center',
  border: '1px solid $accent',
  borderRadius: '9999px',
  px: '10px',
  py: '2px',
  fontSize: '$xs',
  lineHeight: 1.5,
  fontWeight: '$semibold',
  transitionProperty:
    'color, background-color, border-color, text-decoration-color, fill, stroke',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
  '&:focus': {
    outline: '2px solid $focus',
    outlineOffset: '2px',
  },
  variants: {
    ...variantCommon,
    variant: {
      default: {
        backgroundColor: '$primary',
        color: '$primaryForeground',
        borderColor: 'transparent',
        '&:hover': {
          backgroundColor: '$primaryAlpha',
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$secondaryForeground',
        borderColor: 'transparent',
        '&:hover': {
          backgroundColor: '$secondaryAlpha',
        },
      },
      destructive: {
        backgroundColor: '$destructive',
        color: '$destructiveForeground',
        borderColor: 'transparent',
        '&:hover': {
          backgroundColor: '$destructiveAlpha',
        },
      },
      outline: {
        color: '$foreground',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
