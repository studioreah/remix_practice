import { Link } from '@remix-run/react'

export const Bottom = () => {
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          borderTop: 'solid 3px#0c9',
          width: '100%',
          padding: '20px',
        }}
      >
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          Footer
        </Link>
      </div>
    </div>
  )
}
