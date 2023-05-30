import { Link } from '@remix-run/react'

export const Middle = () => {
  return (
    <div>
      <p>Nested Routesを使うとタブみたいな感じの挙動になる</p>
      <div>
        <Link to='/rock/bocchichannorock'>ぼっちちゃんのロック</Link>
      </div>
      <div>
        <Link to='/rock/nigetaguitar'>逃げたギター</Link>
      </div>
      <div>
        <Link to='/rock/kessokubandodesu'>結束バンドです</Link>
      </div>
      <div>
        <Link to='/rock/drummerkodoku'>ドラマー孤独問題</Link>
      </div>
    </div>
  )
}
