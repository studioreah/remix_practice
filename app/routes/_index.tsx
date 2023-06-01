import { useState } from 'react'
import type { V2_MetaFunction, LoaderArgs, ActionArgs } from '@remix-run/cloudflare'
import { UserDomain } from 'server/domains/user'
import { Button, Text, Box, Flex, Input, Label, Ul, Li } from 'app/ui'
import { Outlet } from '@remix-run/react'
import { json } from '@remix-run/cloudflare'
import { Link, Form, useActionData, useLoaderData } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'いぬ' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export const loader = async ({}: LoaderArgs) => {
  const userDomain = new UserDomain({ user: null })

  return json({
    users: await userDomain.getUsers(),
  })
}

export const action = async ({ request }: ActionArgs) => {
  const data = await request.formData()
  const inputValue1 = data.get('inputValue1')

  return json({
    result: inputValue1,
    status: 'ok',
  })
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const [input, setInput] = useState('')

  return (
    <Box ff='sans' lh='md' p={4}>
      <Text as='h1'>Remix練習</Text>

      <Flex gap='6' mt='6'>
        <Box>
          <Link to='/nested'>
            <Text c='facebook' td='none'>
              Nested Routingを試す
            </Text>
          </Link>
        </Box>
        <Box>
          <Link to='/deep'>
            <Text c='facebook' td='none'>
              深層ページに進む
            </Text>
          </Link>
        </Box>
      </Flex>

      <Box>
        <Text as='h3' mt='8'>
          loader
        </Text>
        <Box>
          <Box>Members</Box>
          <Box>
            <Box w='fit-content'>
              <Ul
                css={{ borderBottom: 'solid 1px', d: 'flex', pb: '$1', mb: '$1' }}
              >
                <Li w='16'>id</Li>
                <Li w='32'>name</Li>
                <Li w='32'>part</Li>
              </Ul>
            </Box>
            {data?.users.map(({ id, name, part }) => {
              return (
                <Box key={id}>
                  <Ul d='flex'>
                    <Li w='16'>{id}</Li>
                    <Li w='32'>{name}</Li>
                    <Li w='32'>{part}</Li>
                  </Ul>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Box>

      <Box>
        <Text as='h3' mt='8'>
          action
        </Text>
        <Form
          method='post'
          onSubmit={e => {
            if (!input) return

            e.preventDefault()
            e.currentTarget.submit()
          }}
        >
          <Text>なんか入力して</Text>
          <Flex gap={8} my={8}>
            <Label>
              <Input
                w='64'
                type='text'
                name='inputValue1'
                onChange={e => setInput(e.target.value)}
                value={input}
              />
            </Label>
            <Button type='submit'>送信</Button>
          </Flex>
        </Form>
        <hr />
        お前が送信した値は{' '}
        <Text as='span' fw='bold'>
          {actionData?.result}
        </Text>{' '}
        です
      </Box>
      <Outlet />
    </Box>
  )
}
