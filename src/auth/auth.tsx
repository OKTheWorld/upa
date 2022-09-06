import React, { createContext, useState, useContext, ReactNode } from 'react'

type IAuthContext = {
  userr: string | null
  loginFlagg: boolean
  loginn: (str: string) => void
  logoutt: () => void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

type Props = {
  children: ReactNode
}

const AuthProvider = (props: Props) => {
  const [user, setUser] = useState<string | null>('guest')
  const [loginFlag, setLoginFlag] = useState<boolean>(false)
  const login = (str: string) => {
    setUser(str)
    setLoginFlag(true)
  }
  const logOut = () => {
    setUser(null)
    setLoginFlag(false)
  }
  const authInfo = {
    userr: user,
    loginFlagg: loginFlag,
    loginn: login,
    logoutt: logOut
  }
  return <AuthContext.Provider value={authInfo}>{props.children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext<IAuthContext>(AuthContext)
  return context
}
export { AuthContext, AuthProvider, useAuth }
