import { useAuth } from './auth/auth'
import { Button, Input, useToast, Box } from '@chakra-ui/react'
import { useState } from 'react'

const LoginForm: React.FC = () => {
  const toast = useToast()
  const { loginn } = useAuth()
  const [inputUser, setInputUser] = useState('')
  return (
    <div>
      <p>ユーザー</p>
      <Input placeholder="user" id="userName" onChange={(event) => setInputUser(event.target.value)} />
      <p>パスワード</p>
      <Input type="password" placeholder="pass" />
      <Button
        onClick={() => {
          if (inputUser !== '') {
            loginn(inputUser)
          } else {
            toast({
              position: 'bottom-left',
              duration: 2000,
              isClosable: true,
              render: () => (
                <Box color="black" p={3} bg="red.300">
                  ユーザー名を入力してください
                </Box>
              )
            })
          }
        }}
        colorScheme="black"
        variant="outline"
      >
        ログイン
      </Button>
    </div>
  )
}

export default LoginForm
