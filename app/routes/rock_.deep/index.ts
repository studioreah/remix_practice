import { Template } from './template'
import type { LoaderArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'

export const meta = () => [
  { title: 'deep page' },
  { name: 'description', content: 'deep page' },
]

export const loader = async ({}: LoaderArgs) => {
  return json({
    message:
      'ネストファイルの末尾に _ をつけて.で繋げると(例 rock_.inu.tsx)、 /rock/inu という普通のネストURLが生成できる',
  })
}

export default Template
