import { useAuth } from '@/auth/AuthProvider'

const HeaderUserInfo: React.FC = () => {
  const { user, loginFlag } = useAuth()
  return (
    <>
      <p>user is {user}</p>
      <p>{loginFlag ? 'ログイン中' : 'ログイン してません。'}</p>
    </>
  )
}

export default HeaderUserInfo
