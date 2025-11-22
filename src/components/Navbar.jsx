import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À Propos', href: '#apropos' },
    { name: 'Nos Produits', href: '#boutiques' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#accueil" className="navbar__logo">
          <span className="navbar__logo-text">Bio</span>
          <span className="navbar__logo-accent">Elixir</span>
        </a>

        <ul className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={link.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'navbar__mobile-toggle--active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
