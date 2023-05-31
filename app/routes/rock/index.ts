import { Template } from './template'
import { json } from '@remix-run/cloudflare'
import type { LoaderArgs } from '@remix-run/cloudflare'
import { UserDomain } from 'server/domains/user'
export const meta = () => [
  { title: '青春でなにが悪い' },
  { name: 'description', content: '青春でなにが悪い' },
]

export const loader = async ({}: LoaderArgs) => {
  const userDomain = new UserDomain({ user: null })

  return json({
    message: 'ぼっちちゃんのロック、ぼっち・ざ・ろっく！',
    users: await userDomain.getUsers(),
  })
}

export default Template
