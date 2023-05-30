import { useNavigate } from '@remix-run/react'

export const Template = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div>
      <div style={{ color: 'red' }}>More DEEP Page</div>
      <button onClick={goBack}>戻る</button>
    </div>
  )
}
