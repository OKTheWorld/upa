import axios, { AxiosResponse } from 'axios'
import { createContext, useState, useContext } from 'react'

type IAuthContext = {
  user: string | null
  loginFlag: boolean
  login: (user: string, pass: string) => void
  logout: () => void
}

type Login = {
  access_token: string
}

const AuthContext = createContext<IAuthContext>({ user: null, loginFlag: false, login: () => {}, logout: () => {} })

const AuthProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [user, setUser] = useState<string | null>(null)
  const [loginFlag, setLoginFlag] = useState<boolean>(false)
  const login = async (user: string, pass: string): Promise<void> => {
    try {
      const response: AxiosResponse<Login> = await axios.post('login', { username: user, password: pass })
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`
      window.alert('認証成功')
      setUser(user)
      setLoginFlag(true)
    } catch (error: unknown) {
      window.alert('!!')
      setUser(null)
      setLoginFlag(false)
    }
  }
  const logOut = () => {
    window.alert(user)
    setUser(null)
    setLoginFlag(false)
  }
  const authInfo = {
    user: user,
    loginFlag: loginFlag,
    login: login,
    logout: logOut
  }
  return (
    <>
      <AuthContext.Provider value={authInfo}>{props.children}</AuthContext.Provider>
    </>
  )
}

const useAuth = () => {
  const context = useContext<IAuthContext>(AuthContext)
  return context
}
export { AuthContext, AuthProvider, useAuth }
