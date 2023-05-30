import { Link } from '@remix-run/react'

export const Top = ({ message }: { message: string }) => {
  return (
    <div>
      <div>{message}</div>
      <div>
        <Link to='/rock/deep'>深層URLに進む</Link>
      </div>
    </div>
  )
}
