import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <>
      <p>
        Edit <code>src/Footer.tsx</code> and save to reload.
      </p>
      <Button type="submit" colorScheme="teal">
        <Link to="/">Back to Home</Link>
      </Button>
    </>
  )
}

export default Footer
