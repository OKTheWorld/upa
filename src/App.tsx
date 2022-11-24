import Header from './header'
import Footer from './Footer'
import UPARouter from './router/UPARouter'
import { AuthProvider } from './auth/AuthProvider'
import AuthenticatedGuard from './auth/AuthenticatedGuard'

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Header />
      <UPARouter />
      <Footer />
    </AuthProvider>
  </>
)

export default App
