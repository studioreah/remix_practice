import { Template } from './template'
import { json } from '@remix-run/cloudflare'

export const meta = () => [
  { title: '青春でなにが悪い' },
  { name: 'description', content: '青春でなにが悪い' },
]

export const loader = async () => {
  return json({ message: 'ぼっちちゃんのロック、ぼっち・ざ・ろっく！' })
}

export default Template
