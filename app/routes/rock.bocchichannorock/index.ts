import { Template } from './template'
import { json } from '@remix-run/cloudflare'
import type { LoaderArgs } from '@remix-run/cloudflare'

export const meta = () => [
  { title: 'ぼっちちゃんのロック、ぼっち・ざ・ろっく！' },
  { name: 'description', content: 'ぼっちちゃんのロック、ぼっち・ざ・ろっく！' },
]

export const loader = async ({}: LoaderArgs) => {
  return json({ message: 'ぼっちちゃんのロック、ぼっち・ざ・ろっく！' })
}

export default Template
