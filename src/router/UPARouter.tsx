import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Form from '../form'
import Todo from '../auth'
import { AuthProvider } from '../auth/AuthProvider'
import AuthenticatedGuard from '../auth/AuthenticatedGuard'

const UPARouter: React.FC = () => (
  <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route
          path="/form"
          element={
            <AuthenticatedGuard>
              <Form />
            </AuthenticatedGuard>
          }
        />
      </Routes>
    </AuthProvider>
  </>
)

export default UPARouter
