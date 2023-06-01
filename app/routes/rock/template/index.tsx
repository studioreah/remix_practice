import { useLoaderData } from '@remix-run/react'
import { Outlet } from '@remix-run/react'
import { Bottom } from './Bottom'
import { Middle } from './Middle'
import { Top } from './Top'
import type { loader } from '..'
import { Separator } from '~/ui'

export const Template = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <Top message={data.message} users={data.users} />
      <Separator my={8} />
      <Middle />
      <Separator my={8} />
      <Outlet />
      <Bottom />
    </div>
  )
}
