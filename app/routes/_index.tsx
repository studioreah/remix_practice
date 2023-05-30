import { useState } from 'react'
import type { V2_MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'いぬ' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Remix練習</h1>

      <div>
        <div>{count}</div>
        <button onClick={() => setCount(state => state + 1)}>increment</button>
      </div>

      <div>
        <Link to='rock'>Nested Routesを試す</Link>
      </div>
    </div>
  )
}
