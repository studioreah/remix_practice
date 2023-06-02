import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

import { styled } from 'app/ui/stitches.config'
import { variantCommon } from 'app/ui/variants'

/**
 * @description アスペクト比
 * 子要素のアスペクト比率を ratio propsで指定する
 * https://www.radix-ui.com/docs/primitives/components/aspect-ratio
 */
export const AspectRatio = styled(AspectRatioPrimitive.Root, {
  variants: variantCommon,
})
