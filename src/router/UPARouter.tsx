import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Form from '../form'
import Todo from '../auth'
import AuthenticatedGuard from '../auth/AuthenticatedGuard'

const UPARouter: React.FC = () => (
  <>
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
  </>
)

export default UPARouter
