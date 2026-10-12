import { useState } from 'react'

const links = [
  { href: '#/', label: 'Home', route: 'home' },
  { href: '#/attractions', label: 'Attractions', route: 'attractions' },
  { href: '#/culture', label: 'Culture', route: 'culture' },
  { href: '#/enquire', label: 'Enquire', route: 'enquire' },
]

export default function Header({ isHome = false, currentRoute = 'home' }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header ${isHome ? '' : 'site-header--solid'}`}>
      <a
        className="brand"
        href="#/"
        onClick={closeMenu}
        aria-label="Lesotho Explore home"
      >
        <span className="brand-mark">
          <img src="/attractions/hero-lesotho.jpg" alt="Lesotho flag" />
        </span>

        <span className="brand-copy">
          <strong>Lesotho</strong>
          <span>Explore</span>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label="Toggle navigation"
      >
        <span className="menu-line" />
        <span className="menu-line" />
      </button>

      <nav
        id="main-nav"
        className={`main-nav ${open ? 'main-nav--open' : ''}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={currentRoute === link.route ? 'active' : ''}
            aria-current={currentRoute === link.route ? 'page' : undefined}
          >
            {link.label}
          </a>
        ))}

        <a className="nav-cta" href="#/enquire" onClick={closeMenu}>
          Plan a visit <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}