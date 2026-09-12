import './App.css'
import Signup from './pages/Auth/Signup'
import Home from './pages/Home/House'
import MembersDashboard from './pages/Members/Dashboard'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  // Clean conditional routing checks
  if (path === '/signup') {
    return <Signup />
  }
  
  if (path === '/dashboard') {
    return <MembersDashboard />
  }

  // Fallback default page (shows landing screen for / or /home)
  return <Home />
}

export default App
