import './Navbar.css'

function Navbar() {
  return (
    <div className="site-header-wrapper">
      <header className="site-header max-[640px]:!px-3">
        <a className="site-header__logo max-[640px]:!text-[10px] max-[640px]:!tracking-[2px]" href="#top" aria-label="Vyonic House home">
          VYONIC
        </a>
        <nav className="site-nav max-[640px]:!gap-0" aria-label="Main navigation">
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