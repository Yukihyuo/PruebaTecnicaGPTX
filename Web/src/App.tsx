import { useUserTokenStore } from './store/userStore'
import AppRoutes from './routes'
import Login from './app/Login'

export default function App() {
  const { isTokenPresent } = useUserTokenStore()
  return (isTokenPresent() ? <AppRoutes /> : <Login />
  )
}
