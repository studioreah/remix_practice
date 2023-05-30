import { useLoaderData } from '@remix-run/react'
import type { loader } from './'

export const Template = () => {
  const data = useLoaderData<typeof loader>()

  return <div style={{ color: 'red' }}>{data.message}</div>
}
