import { Link } from '@remix-run/react'

export const Top = ({
  message,
  users,
}: {
  message: string
  users: { id: string; name: string; part: string }[]
}) => {
  return (
    <div>
      <div>{message}</div>
      <div>
        {users.map(({ id, name, part }) => {
          return (
            <div key={id}>
              <ul>
                <li>id: {id}</li>
                <li>name: {name}</li>
                <li>part: {part}</li>
              </ul>
            </div>
          )
        })}
      </div>
      <div style={{ marginTop: '16px' }}>
        <Link to='/rock/deep'>深層URLに進む</Link>
      </div>
    </div>
  )
}
