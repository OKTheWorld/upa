import { useAuth } from '../auth/AuthProvider'
import LoginForm from '../auth/LoginForm'

const AuthenticatedGuard: React.FC<{ children: React.ReactNode }> = (props) => {
  const { loginFlag } = useAuth()

  return loginFlag === true ? <>{props.children}</> : <LoginForm />
}

export default AuthenticatedGuard
