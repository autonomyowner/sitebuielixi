import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToProducts = () => {
    document.getElementById('boutiques')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="accueil" className={`hero ${isLoaded ? 'hero--loaded' : ''}`} ref={heroRef}>
      {/* Video Background */}
      <div className="hero__video-container">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero image.jpg"
        >
          <source src="/Video_Prompt_and_Generationhero.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
        </video>
        <div className="hero__overlay"></div>
        <div className="hero__gradient"></div>
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__subtitle-wrapper">
          <span className="hero__subtitle">La Nature au Service de Votre Bien-être</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">La Puissance</span>
          <span className="hero__title-line hero__title-line--accent">de la Grenade</span>
        </h1>

        <p className="hero__description">
          BioElixir révèle les trésors de la grenade à travers une gamme complète :
          Jus thérapeutiques, Compléments Bio, Huiles Essentielles, Cosmétiques et bien plus encore.
        </p>

        <div className="hero__cta-group">
          <button className="hero__cta hero__cta--primary" onClick={scrollToProducts}>
            <span>Découvrir Nos Produits</span>
          </button>
          <a href="#apropos" className="hero__cta hero__cta--secondary">
            <span>En Savoir Plus</span>
          </a>
        </div>

        <div className="hero__tagline">
          <span className="hero__tagline-text">Une boisson pour tous</span>
          <span className="hero__tagline-divider"></span>
          <span className="hero__tagline-text">100% Naturel</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">Défiler</span>
        <div className="hero__scroll-line"></div>
      </div>

      {/* Decorative Elements */}
      <div className="hero__decoration hero__decoration--left"></div>
      <div className="hero__decoration hero__decoration--right"></div>
    </section>
  )
}

export default Hero
