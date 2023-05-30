import type { LoaderFunction } from '@remix-run/cloudflare'
import { Template } from './template'
import { json } from '@remix-run/cloudflare'

export const meta = () => [
  { title: '結束バンドです！' },
  { name: 'description', content: '結束バンドです！' },
]

export const loader: LoaderFunction = async () => {
  return json({ message: '結束バンドです！' })
}

export default Template
