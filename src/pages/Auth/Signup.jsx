import { useState, useEffect } from 'react'
import './Signup.css'
import corridorImage from '../../assets/corridor-BklKOuZO.jpg'
import Navbar from '../../components/Navbar/Navbar'

function BrandMark({ compact = false }) {
  return (
    <div
      className={`brand-mark${compact ? ' brand-mark--compact' : ''}`}
      aria-label="Vyonic House"
    >
      <svg
        className="brand-mark__wing"
        viewBox="0 0 24 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 0 L12 16 L24 0 L18 0 L12 8 L6 0 Z" />
      </svg>
      <span>VYONIC</span>
      <span className="brand-mark__dot" aria-hidden="true">
        •
      </span>
      <span>HOUSE</span>
    </div>
  )
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
  const isSignIn = mode === 'signin'

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
          onClick={() => setMode('signin')}
          type="button"
          role="tab"
          aria-selected={isSignIn}
        >
          Sign in
        </button>
        <button
          className={!isSignIn ? 'is-selected' : ''}
          onClick={() => setMode('create')}
          type="button"
          role="tab"
          aria-selected={!isSignIn}
        >
          Create account
        </button>
      </div>

      <form onSubmit={(event) => event.preventDefault()}>
        {!isSignIn ? (
          <>
            <label htmlFor="fullname">
              Full name
              <input id="fullname" name="fullname" type="text" autoComplete="name" required />
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
              <input id="phone" name="phone" type="tel" autoComplete="tel" required />
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
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
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
                defaultValue="review.admin@vyonic.house"
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
                defaultValue="vyonic-house-2026"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </>
        )}

        <button className="submit-button" type="submit">
          {isSignIn ? 'Sign in' : 'Create account'}
        </button>
      </form>

      {isSignIn && (
        <button className="demo-button" type="button">
          Explore as demo member
        </button>
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