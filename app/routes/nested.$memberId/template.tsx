import { useLoaderData } from '@remix-run/react'
import type { Loader } from '.'
import { Box, Text } from 'app/ui'

export const Template = () => {
  const { user } = useLoaderData<Loader>()

  if (!user) return <Text>user not found</Text>

  return (
    <Box>
      <Text>id: {user?.id}</Text>
      <Text fw='bold'>name: {user?.name}</Text>
      <Text>part: {user?.part}</Text>
      <Text>birthday: {user?.birthday}</Text>
      <Text>blood type: {user?.blood}</Text>
      <Text>height: {user?.height}</Text>
    </Box>
  )
}
