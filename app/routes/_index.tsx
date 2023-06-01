import { useState } from 'react'
import type { V2_MetaFunction, ActionArgs } from '@remix-run/cloudflare'

import { Button, Text, Box, Flex, Input, Label } from 'app/ui'

import { json } from '@remix-run/cloudflare'
import { Link, Form, useActionData } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'いぬ' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export const action = async ({ request }: ActionArgs) => {
  const data = await request.formData()
  const inputValue1 = data.get('inputValue1')

  return json({
    result: inputValue1,
  })
}

export default function Index() {
  const [count, setCount] = useState(0)
  const data = useActionData<typeof action>()
  const [input, setInput] = useState('')

  return (
    <Box ff='sans' lh='md' p={4}>
      <Text as='h1'>Remix練習</Text>

      <Flex gap={8} mt={8}>
        <Text as='h3'>{count}</Text>
        <Button variant='destructive' onClick={() => setCount(state => state + 1)}>
          increment
        </Button>
      </Flex>

      <Flex gap='8' mt='8'>
        <Box>
          <Link to='/rock'>
            <Text c='accentForeground' td='none'>
              Nested Routesを試す
            </Text>
          </Link>
        </Box>
      </Flex>

      <>
        <Text as='h3' mt='8'>
          action
        </Text>
        <Form
          method='post'
          onSubmit={e => {
            if (!input) return

            e.preventDefault()
            e.currentTarget.submit()

            console.log('送信しました')
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
          {data?.result}
        </Text>{' '}
        です
      </>
    </Box>
  )
}
