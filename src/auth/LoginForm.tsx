import { Button, Input, useToast, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useAuth } from '../auth/AuthProvider'

const LoginForm: React.FC = () => {
  const toast = useToast()
  const { login } = useAuth()
  const [inputUser, setInputUser] = useState('')
  const [inputPass, setInputPass] = useState('')
  return (
    <div>
      <p>ユーザー</p>
      <Input placeholder="user" id="userName" onChange={(event) => setInputUser(event.target.value)} />
      <p>パスワード</p>
      <Input type="password" id="userPass" placeholder="pass" onChange={(event) => setInputPass(event.target.value)} />
      <Button
        onClick={() => {
          if (inputUser !== '') {
            login(inputUser, inputPass)
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
