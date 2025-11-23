import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (href.startsWith('#')) {
      // If we're on the home page, scroll to the section
      if (location.pathname === '/') {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Navigate to home page and then scroll
        navigate('/' + href)
      }
    }
  }

  const navLinks = [
    { name: 'Accueil', href: '/', isRoute: true },
    { name: 'Les Jus', href: '/les-jus', isRoute: true },
    { name: 'Compléments', href: '/complements', isRoute: true },
    { name: 'Cosmétiques', href: '/cosmetiques', isRoute: true },
    { name: 'Huiles', href: '/huiles-essentielles', isRoute: true },
    { name: 'Fruits Secs', href: '/fruits-secs', isRoute: true },
    { name: 'Papier Grenade', href: '/papier-grenade', isRoute: true },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-text">Bio</span>
          <span className="navbar__logo-accent">Elixir</span>
        </Link>

        <ul className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={link.name} style={{ animationDelay: `${index * 0.1}s` }}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="navbar__link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              )}
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
