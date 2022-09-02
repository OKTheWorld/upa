import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <>
      <p>
        Edit <code>src/Header.tsx</code> and save to reload.
      </p>
      <Button type="submit" colorScheme="teal">
        <Link to="/form">Go to Form</Link>
      </Button>
    </>
  )
}

export default Header
