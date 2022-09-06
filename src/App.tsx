import { Route, Routes } from 'react-router-dom'
import Header from './Header/index'
import Footer from './Footer'
import axios from 'axios'
import Home from './Home'
import Form from './form'
import Todo from './auth'
import LoginForm from './loginForm'
import { AuthProvider } from './auth/auth'
import AuthGuard from './auth/authGuard'

const App: React.FC = () => {
  axios.defaults.baseURL = 'https://u-pa.mydns.jp/api'
  axios.defaults.headers.common['Content-Type'] = 'application/json'

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/todo"
            element={
              <AuthGuard>
                <Todo />
              </AuthGuard>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
