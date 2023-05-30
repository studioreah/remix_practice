import { useLoaderData, useNavigate, Link } from '@remix-run/react'

import type { loader } from './'

export const Template = () => {
  const data = useLoaderData<typeof loader>()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div>
      <div style={{ color: 'blue' }}>DEEP PAGE</div>
      <hr />
      <div style={{ fontSize: '14px' }}>{data.message}</div>
      <hr />
      <div style={{ marginBottom: '8px' }}>
        <Link to='/rock/deep/moredeep'>進む</Link>
      </div>
      <button onClick={goBack}>戻る</button>
    </div>
  )
}
