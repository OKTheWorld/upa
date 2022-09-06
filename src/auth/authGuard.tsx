import { useAuth } from './auth'
import LoginForm from '../loginForm'

const AuthGuard = (props: any) => {
  const { loginFlagg } = useAuth()

  return loginFlagg === true ? <>{props.children}</> : <LoginForm />
}

export default AuthGuard
