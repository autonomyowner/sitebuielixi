import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const collections = [
    "Jus & Élixirs",
    "Compléments Bio",
    "Huiles Essentielles",
    "Cosmétiques",
    "Fruits Séchés",
    "Pâtisserie",
    "Papier Grenade",
    "Agro Nutrition",
  ]

  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À Propos", href: "#apropos" },
    { name: "Nos Produits", href: "#boutiques" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer id="contact" className="footer">
      <div className="footer__top-border"></div>

      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#accueil" className="footer__logo">
              <span className="footer__logo-text">Bio</span>
              <span className="footer__logo-accent">Elixir</span>
            </a>
            <p className="footer__tagline">
              La puissance de la grenade au service de votre bien-être.
              Science botanique et raffinement pour régénérer, nourrir et sublimer naturellement.
            </p>
            <div className="footer__motto">
              <span className="footer__motto-text">"Une boisson pour tous"</span>
            </div>
          </div>

          {/* Collections Column */}
          <div className="footer__column">
            <h4 className="footer__column-title">Nos Collections</h4>
            <ul className="footer__list">
              {collections.map((item) => (
                <li key={item}>
                  <a href="#boutiques" className="footer__link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer__column">
            <h4 className="footer__column-title">Navigation</h4>
            <ul className="footer__list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer__link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer__column">
            <h4 className="footer__column-title">Contact</h4>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <span className="footer__contact-label">Email</span>
                <a href="mailto:contact@bioelixir.com" className="footer__contact-value">
                  contact@bioelixir.com
                </a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-label">Téléphone</span>
                <a href="tel:+33123456789" className="footer__contact-value">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-label">Adresse</span>
                <span className="footer__contact-value">
                  Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer__newsletter">
          <div className="footer__newsletter-content">
            <h4 className="footer__newsletter-title">Restez Informé</h4>
            <p className="footer__newsletter-text">
              Inscrivez-vous pour recevoir nos dernières actualités et offres exclusives.
            </p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Votre adresse email"
              className="footer__newsletter-input"
              required
            />
            <button type="submit" className="footer__newsletter-btn">
              S'inscrire
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>© {currentYear} BioElixir. Tous droits réservés.</p>
          </div>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Mentions Légales</a>
            <span className="footer__legal-divider"></span>
            <a href="#" className="footer__legal-link">Politique de Confidentialité</a>
            <span className="footer__legal-divider"></span>
            <a href="#" className="footer__legal-link">CGV</a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer__decoration"></div>
    </footer>
  )
}

export default Footer
