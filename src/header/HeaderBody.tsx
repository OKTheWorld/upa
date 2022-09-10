import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useAuth } from '../auth/AuthProvider'

const HeaderBody: React.FC = () => {
  const { loginFlag, logout } = useAuth()
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
      {loginFlag && (
        <Button type="submit" colorScheme="gray" onClick={() => logout()}>
          ログアウト
        </Button>
      )}
    </>
  )
}

export default HeaderBody
