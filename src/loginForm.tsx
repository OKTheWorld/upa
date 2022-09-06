import { useAuth } from './auth/auth'
import { Button, Input } from '@chakra-ui/react'
import { useState } from 'react'

const LoginForm: React.FC = () => {
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
          loginn(inputUser)
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
