import { Template } from './template'
import { json } from '@remix-run/cloudflare'
import type { LoaderArgs } from '@remix-run/cloudflare'

export const meta = () => [
  { title: 'あっ…これが漫画でよく見る、ドラマー孤独問題か' },
  { name: 'description', content: 'あっ…これが漫画でよく見る、ドラマー孤独問題か' },
]

export const loader = async ({}: LoaderArgs) => {
  return json({ message: 'あっ…これが漫画でよく見る、ドラマー孤独問題か' })
}

export default Template
