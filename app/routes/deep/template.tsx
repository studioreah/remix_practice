import { useNavigate } from '@remix-run/react'
import { Button, Text, Box } from 'app/ui'

export const Template = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  const goDeep = () => navigate('/deep/moredeep')

  return (
    <Box ff='sans' lh='md' p={4}>
      <Text as='h1'>DEEP Page</Text>

      <Box d='flex' spaceX='8' mt='8'>
        <Button variant='outline' onClick={goBack}>
          戻る
        </Button>
        <Button onClick={goDeep}>進む</Button>
      </Box>

      <Text mt='8'>
        第一階層のネストは、routes下のファイル名.tsx( or フォルダ名/index.tsx )(例
        deep.tsx)、で パスが /ファイル名 となるページにアクセスできる (/deep)
      </Text>
    </Box>
  )
}
