import type { LoaderFunction } from '@remix-run/cloudflare'
import { Template } from './template'
import { json } from '@remix-run/cloudflare'

export const meta = () => [
  { title: '逃げたギターーーー！！！！！' },
  { name: 'description', content: '逃げたギターーーー！！！！！' },
]

export const loader: LoaderFunction = async () => {
  return json({ message: '逃げたギターーーー！！！！！' })
}

export default Template
