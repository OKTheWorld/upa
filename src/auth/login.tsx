import { useAuth } from './auth'
import { Button } from '@chakra-ui/react'

const LoginUser: React.FC = () => {
  const { userr, loginFlagg, loginn, logoutt } = useAuth()
  const flag = loginFlagg ? 'true' : 'false'
  return (
    <div>
      <p>user is {userr}</p>
      <p>flag is {flag}</p>
      <Button
        onClick={() => {
          if (userr !== null) {
            loginn(userr)
          }
        }}
        colorScheme="black"
        variant="outline"
      >
        ログイン
      </Button>
      <Button
        onClick={() => {
          if (loginFlagg) {
            logoutt()
          }
        }}
        colorScheme="black"
        variant="outline"
      >
        ログアウト
      </Button>
    </div>
  )
}

export default LoginUser
