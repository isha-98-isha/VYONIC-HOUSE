import './App.css'
import Signup from './pages/Auth/Signup'
import Home from './pages/Home/House'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  return path === '/signup' ? <Signup /> : <Home />
}

export default App