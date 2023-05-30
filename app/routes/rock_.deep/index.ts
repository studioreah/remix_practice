import { Template } from './template'
import { json } from '@remix-run/cloudflare'

export const meta = () => [
  { title: 'deep page' },
  { name: 'description', content: 'deep page' },
]

export const loader = async () => {
  return json({
    message:
      'ネストファイルの末尾に _ をつけて.で繋げると(例 rock_.inu.tsx)、 /rock/inu という普通のネストURLが生成できる',
  })
}

export default Template
