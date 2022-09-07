import { useAuth } from '../auth/auth'

const HeaderUserInfo: React.FC = () => {
  const { userr, loginFlagg, acccessTokenn } = useAuth()
  return (
    <>
      <p>user is {userr}</p>
      <p>Token is {acccessTokenn}</p>
      <p>{loginFlagg ? 'ログイン中' : 'ログイン してません。'}</p>
    </>
  )
}

export default HeaderUserInfo
