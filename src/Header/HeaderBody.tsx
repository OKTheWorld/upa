import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/auth'

const HeaderBody: React.FC = () => {
  const { loginFlagg, logoutt } = useAuth()
  return (
    <>
      <p>
        Edit <code>src/Header.tsx</code> and save to reload.
      </p>
      <Button type="submit" colorScheme="red">
        <Link to="/form">Go to Form</Link>
      </Button>
      <Button type="submit" colorScheme="messenger">
        <Link to="/todo">Go to Todo</Link>
      </Button>
      <Button type="submit" colorScheme="gray">
        <Link to="/login">Go to LoginForm</Link>
      </Button>
      {loginFlagg ? (
        <Button type="submit" colorScheme="gray" onClick={() => logoutt()}>
          ログアウト
        </Button>
      ) : null}
    </>
  )
}

export default HeaderBody
