import { useState, useEffect } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import './Signup.css'
import corridorImage from '../../assets/corridor-BklKOuZO.jpg'
import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/Button/Button'
import vyonicLogo from '../../assets/vyonic-mark-BEL-OzHk.png';

const USER_STORAGE_KEY = 'vyonicUser'
const SESSION_STORAGE_KEY = 'vyonicSession'

function getStoredUsers() {
  const storedUsers = localStorage.getItem(USER_STORAGE_KEY)
  if (!storedUsers) return []

  try {
    const parsedUsers = JSON.parse(storedUsers)
    return Array.isArray(parsedUsers) ? parsedUsers : [parsedUsers]
  } catch {
    localStorage.removeItem(USER_STORAGE_KEY)
    return []
  }
}

function BrandMark({ compact = false }) {
    return (
        <div className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} aria-label="Vyonic House">
            <img 
                src={vyonicLogo} 
                alt="Vyonic Logo" 
                className="brand-mark_wing" 
                aria-hidden="true" 
            />
            <h3>VYONIC</h3>
            <span className="brand-mark__dot" aria-hidden="true">
                •
            </span>
            <h5>HOUSE</h5>
        </div>
    );
}

function BrandVisual() {
  return (
    <div
      className="brand-visual max-[900px]:grid-cols-1 max-[900px]:min-h-0 max-[900px]:flex-none min-[901px]:max-[1200px]:grid-cols-2 min-[1201px]:grid-cols-2"
      aria-label="The Vyonic House method"
    >
      <div className="brand-visual__grid max-[900px]:h-[320px]">
        <img
          src={corridorImage}
          alt="A blue-lit corridor with repeating arches"
        />
        <div className="brand-visual__overlay" aria-hidden="true" />
      </div>
      <div className="brand-copy max-[900px]:px-6 max-[900px]:py-8">
        <BrandMark />
        <p className="eyebrow">Human performance, considered</p>
        <h1>
          One ID.
          <br />
          Every door.
          <br />
          <strong>The whole method.</strong>
        </h1>
        <p className="brand-copy__description">
          A coached journey — assessment, training, classes and community. Measured
          every 90 days.
        </p>
        <p className="brand-copy__signature">© VYONIC</p>
      </div>
    </div>
  )
}

function AuthCard() {
  const [mode, setMode] = useState('signin')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState(null)
  const isSignIn = mode === 'signin'

  const changeMode = (nextMode) => {
    setMode(nextMode)
    setMessage(null)
    setShowPassword(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email')).trim().toLowerCase()
    const password = String(formData.get('password'))
    const storedUsers = getStoredUsers()

    if (isSignIn) {
      if (storedUsers.length === 0) {
        setMessage({ text: 'Create an account before signing in.', type: 'error' })
        return
      }

      const user = storedUsers.find((storedUser) => (
        storedUser.email === email && storedUser.password === password
      ))
      if (!user) {
        setMessage({ text: 'The email or password is incorrect.', type: 'error' })
        return
      }

      // 2. Enhanced the session storage object to include a dynamic role flag
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({ 
        email: user.email, 
        role: 'client · member' 
      }))
      window.location.assign('/dashboard')
      return
    }

    if (storedUsers.some((storedUser) => storedUser.email === email)) {
      setMessage({ text: 'An account already exists. Please sign in.', type: 'error' })
      return
    }

    const newUser = {
      fullName: String(formData.get('fullname')).trim(),
      email,
      phone: String(formData.get('phone')).trim(),
      password,
      termsAccepted: formData.get('terms') === 'on',
      waiverAccepted: formData.get('waiver') === 'on',
      privacyAccepted: formData.get('privacy') === 'on',
    }
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify([...storedUsers, newUser]))
    setMessage({ text: 'Account created. Please sign in.', type: 'success' })
    setMode('signin')
    setShowPassword(false)
  }

  return (
    <section
      className="auth-card max-[900px]:w-[min(448px,calc(100%-32px))] max-[900px]:my-5 max-[900px]:mx-auto max-[900px]:mb-10 max-[900px]:p-6 min-[901px]:max-[1200px]:ml-[max(20px,calc(25%-224px+20px))]"
      aria-label="Account access"
    >
      <p className="auth-card__intro">
        One VYONIC account works across Life, House and Connect.
      </p>

      <div className="auth-tabs" role="tablist" aria-label="Account options">
        <button
          className={isSignIn ? 'is-selected' : ''}
          onClick={() => changeMode('signin')}
          type="button"
          role="tab"
          aria-selected={isSignIn}
        >
          Sign in
        </button>
        <button
          className={!isSignIn ? 'is-selected' : ''}
          onClick={() => changeMode('create')}
          type="button"
          role="tab"
          aria-selected={!isSignIn}
        >
          Create account
        </button>
      </div>

      {message && (
        <p className={`auth-card__message auth-card__message--${message.type}`} role="alert">
          {message.text}
        </p>
      )}

      <form key={mode} onSubmit={handleSubmit}>
        {!isSignIn ? (
          <>
            <label htmlFor="fullname">
              Full name
              <input id="fullname" name="fullname" type="text" autoComplete="name" minLength="2" required />
            </label>

            <label htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>

            <label htmlFor="phone">
              Phone
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                pattern="[+0-9 ()\-]{7,}"
                required
              />
            </label>

            <div className="field-heading">
              <label htmlFor="password">Password</label>
            </div>

            <div className="password-field">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                minLength="8"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {/* 3. Swapped Create Password Text with Icons */}
                {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>

            <div className="auth-checkboxes">
              <label className="checkbox-label">
                <input type="checkbox" name="terms" required />
                <span>I accept the Terms &amp; Conditions</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="waiver" required />
                <span>I sign the Liability Waiver</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="privacy" required />
                <span>I accept the Data Privacy Consent</span>
              </label>
            </div>
          </>
        ) : (
          <>
            <label htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>

            <div className="field-heading">
              <label htmlFor="password">Password</label>
              <button className="forgot-link" type="button">
                Forgot password?
              </button>
            </div>

            <div className="password-field">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {/* 4. Swapped Sign In Password Text with Icons */}
                {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>
          </>
        )}

        <Button variant="submit" type="submit">
          {isSignIn ? 'Sign in' : 'Create account'}
        </Button>
      </form>

      {isSignIn && (
        <Button href="/dashboard" variant="demo" type="button">
          Explore as demo member
        </Button>
      )}
    </section>
  )
}

function Signup() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      className="app-shell max-[900px]:min-h-[100svh] max-[900px]:h-auto max-[900px]:overflow-y-auto"
      id="top"
    >
      <Navbar />
      <main className="max-[900px]:overflow-visible">
        <BrandVisual />
        <AuthCard />
      </main>
    </div>
  )
}

export default Signup