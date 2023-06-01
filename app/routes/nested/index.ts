import { Template } from './template'
import { json } from '@remix-run/cloudflare'
import { UserDomain } from 'server/domains/user'
export const meta = () => [
  { title: 'Nested Routing sample' },
  { name: 'description', content: 'Nested Routing sample' },
]

export const loader = async () => {
  const userDomain = new UserDomain({ user: null })

  return json({
    users: await userDomain.getUsers(),
  })
}

export default Template
