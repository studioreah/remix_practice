import { Button, Text, Box, Flex } from 'app/ui'
import { useLoaderData, Outlet, Link } from '@remix-run/react'
import type { loader } from '.'

export const Template = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <>
      <Box ff='sans' lh='md' p={4}>
        <Text as='h1'>Nested Routing</Text>
        <Box d='flex' spaceX='8' mt='8'>
          <Link to='/'>
            <Button variant='outline'>戻る</Button>
          </Link>
        </Box>

        <Box mt='8'>
          <Text fz='sm'>
            ファイル名/フォルダ名を . ドットで繋いだ
            <a
              href='https://remix.run/docs/en/main/guides/routing'
              target='_blank'
              rel='noopener noreferrer'
            >
              Nested Routing
            </a>
            を使うと、URLのスラッグに応じたコンポーネントが
            &lt;Outlet&gt;コンポーネントを通じてレンダリングされる
          </Text>
          <Text fz='sm' mt='2'>
            また、ドット次の文字の先頭に $ をつけると (例 nested.$memeberId.tsx )
            スラッグの値をloader内の params 変数 から取得できる。 パスが /nested/1
            であるとき、 params.memberId の値は 1 となる。
          </Text>
        </Box>
        <Box mt='12'>
          <Flex gap={6} my={6}>
            {data.users.map(({ id, name }) => {
              return (
                <Box key={id}>
                  <Link to={`/nested/${id}`}>
                    <Button variant='secondary'>{name}</Button>
                  </Link>
                </Box>
              )
            })}
          </Flex>
        </Box>

        <Box
          css={{
            border: 'solid 2px $facebook',
            px: '$8',
            py: '$6',
            w: '700px',
            mih: '300px',
            br: '$sm',
          }}
        >
          <Text fz='sm' mb='8'>
            この下に &lt;Outlet&gt;コンポーネントがレンダリングされており、 Nested
            Routing に対応したデータが表示される
          </Text>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}
