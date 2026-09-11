import './Navbar.css'

function Navbar() {
  return (
    <div className="site-header-wrapper">
      <header className="site-header">
        <a className="site-header__logo" href="#top" aria-label="Vyonic House home">
          VYONIC
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#life">Life</a>
          <a className="site-nav__active" href="#house">
            House
          </a>
          <a href="#connect">Connect</a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar