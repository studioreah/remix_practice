import * as ToolbarPrimitive from '@radix-ui/react-toolbar'

import { styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

const itemStyles = {
  variants: variantCommon,
  all: 'unset',
  flex: '0 0 auto',
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': { backgroundColor: '$accentAlpha', color: '$accentForeground' },
  '&:focus-visible': {
    outline: '2px solid $focus',
    outlineOffset: '2px',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
}

/**
 * @description
 * ボタン、トグルグループ、ドロップダウンメニューなどのセットをグループ化するためのコンテナ
 * https://www.radix-ui.com/docs/primitives/components/toolbar
 */
export const Toolbar = {
  Root: styled(ToolbarPrimitive.Root, {
    variants: variantCommon,
    display: 'flex',
    padding: 10,
    width: '100%',
    minWidth: 'max-content',
    borderRadius: 6,
    backgroundColor: '$background',
  }),
  Separator: styled(ToolbarPrimitive.Separator, {
    variants: variantCommon,
    width: 1,
    backgroundColor: '$accent',
    mx: '10px',
  }),
  Button: styled(ToolbarPrimitive.Button, {
    ...itemStyles,
    px: '12px',
    backgroundColor: '$primary',
    borderColor: '$primary',
    color: '$primaryForeground',
    '&:hover': {
      backgroundColor: '$primaryAlpha',
      borderColor: '$primaryAlpha',
    },
  }),
  Link: styled(ToolbarPrimitive.Link, {
    ...itemStyles,
    backgroundColor: 'transparent',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': { backgroundColor: 'none', color: '$primary', cursor: 'pointer' },
  }),
  ToggleGroup: styled(ToolbarPrimitive.ToggleGroup, {
    variants: variantCommon,
    display: 'inline-flex',
    borderRadius: 4,
  }),
  ToggleItem: styled(ToolbarPrimitive.ToggleItem, {
    ...itemStyles,
    boxShadow: '$0',
    backgroundColor: 'white',
    marginLeft: 2,
    '&:first-child': { marginLeft: 0 },
    '&[data-state=on]': { backgroundColor: '$accent', color: '$accentForeground' },
  }),
}
