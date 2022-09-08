import axios from 'axios'
import { createContext, useState, useContext, ReactNode } from 'react'

type IAuthContext = {
  userr: string | null
  acccessToken: string | null
  loginFlagg: boolean
  login: (user: string, pass: string) => void
  logoutt: () => void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

type Props = {
  children: ReactNode
}

const AuthProvider = (props: Props) => {
  const [user, setUser] = useState<string | null>(null)
  const [acccessToken, setAccessToken] = useState<string | null>(null)
  const [loginFlag, setLoginFlag] = useState<boolean>(false)
  const login = (user: string, pass: string) => {
    setUser(user)
    axios.post('login', { username: user, password: pass }).then((results) => setAccessToken(results.data.access_token))
    setLoginFlag(true)
  }
  const logOut = () => {
    setUser(null)
    setLoginFlag(false)
  }
  const authInfo = {
    userr: user,
    acccessToken: acccessToken,
    loginFlagg: loginFlag,
    login: login,
    logoutt: logOut
  }
  return <AuthContext.Provider value={authInfo}>{props.children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext<IAuthContext>(AuthContext)
  return context
}
export { AuthContext, AuthProvider, useAuth }
