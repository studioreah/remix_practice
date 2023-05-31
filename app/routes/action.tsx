import type { ActionArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { Link, Form, useActionData } from '@remix-run/react'

export const meta = () => [
  { title: 'action' },
  { name: 'description', content: 'action' },
]

export const action = async ({ request }: ActionArgs) => {
  const data = await request.formData()
  const inputValue1 = data.get('inputValue1')

  return json({
    result: inputValue1,
  })
}

export default function Action() {
  const data = useActionData<typeof action>()

  return (
    <>
      <h1>action</h1>
      <Link to='/'>戻る</Link>
      <div style={{ marginTop: 32 }} />
      <Form
        method='post'
        onSubmit={e => {
          e.preventDefault()
          e.currentTarget.submit()
        }}
      >
        <p>
          <label>
            <p>{data ? 'ありがとう' : 'なんか入力して'}</p>
            <input type='text' name='inputValue1' />
          </label>
          <button type='submit'>送信</button>
        </p>
      </Form>
      <hr />
      お前が送信した値は {data?.result} です
    </>
  )
}
