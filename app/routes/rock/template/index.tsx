import { useLoaderData } from '@remix-run/react'
import { Outlet } from '@remix-run/react'
import { Bottom } from './Bottom'
import { Middle } from './Middle'
import { Top } from './Top'
import type { loader } from '../'

export const Template = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <Top message={data.message} />
      <hr />
      <Middle />
      <hr />
      <Outlet />
      <Bottom />
    </div>
  )
}
