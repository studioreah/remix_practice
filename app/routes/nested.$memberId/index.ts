import { json } from '@remix-run/cloudflare'
import type { LoaderArgs } from '@remix-run/cloudflare'
import { Template } from './template'
import { UserDomain } from 'server/domains/user'

export async function loader({ params }: LoaderArgs) {
  const userDomain = new UserDomain({ user: null })
  const id = params.memberId
  const user = await userDomain.getUser(id ?? '')

  return json({
    user,
  })
}

export type Loader = typeof loader

export default Template
