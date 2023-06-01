import { useNavigate } from '@remix-run/react'
import { Button, Text, Box } from 'app/ui'
export const Template = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <Box ff='sans' lh='md' p={4}>
      <Text as='h1'>More DEEP Page</Text>
      <Button mt='8' variant='outline' onClick={goBack}>
        戻る
      </Button>

      <Text mt='8'>
        第二階層以上のネストは、routes下のファイルの末尾に _ をつけて.で繋げると(例
        deep_.moredeep.tsx)、 /deep/moredeep という普通のネストURLが生成できる
      </Text>
    </Box>
  )
}
