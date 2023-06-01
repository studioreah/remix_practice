import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'
/**
 * @description
 * 小さいサイズのアバター画像を表示するコンポーネント
 * https://www.radix-ui.com/docs/primitives/components/avatar
 * https://ui.shadcn.com/docs/components/avatar
 *
 * @note
 * 実際のfallbackにはスケルトンか初期アイコンが入るので、まとめてコンポーネント化する
 */

export const Avatar = {
  /** アバター要素のコンテナ */
  Root: styled(AvatarPrimitive.Root, {
    variants: variantCommon,
    position: 'relative',
    display: 'flex',
    height: '40px',
    width: '40px',
    flexShrink: 0,
    overflow: 'hidden',
    borderRadius: '100%',
  }),
  /** 画像を表示するコンポーネント */
  Image: styled(AvatarPrimitive.Image, {
    variants: variantCommon,
    width: '100%',
    height: '100%',
    aspectRatio: '1/1',
  }),
  /** 画像が読み込めない際に表示するコンポーネント */
  Fallback: styled(AvatarPrimitive.Fallback, {
    variants: variantCommon,
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    backgroundColor: '$muted',
  }),
}
