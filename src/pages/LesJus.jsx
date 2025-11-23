import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ProductPage.css'

const LesJus = () => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const products = [
    {
      id: 1,
      name: "Jus Nature de Grenade",
      description: "Notre jus de grenade pur, 100% naturel et sans additifs. Une explosion de saveurs authentiques pour votre bien-être quotidien.",
      image: "/Jus.jpg",
      volumes: [
        { size: "330 ml", price: "90 DA" },
        { size: "1 L", price: "200 DA" },
        { size: "2 L", price: "280 DA" }
      ],
      accent: "#C9A962",
      tag: "Classique"
    },
    {
      id: 2,
      name: "Jus Glucose Stability",
      description: "Formulé spécialement pour les personnes diabétiques. Un équilibre parfait entre goût et bienfaits thérapeutiques pour une glycémie stable.",
      image: "/Jus 6.jpg",
      volumes: [
        { size: "330 ml", price: "100 DA" },
        { size: "1 L", price: "300 DA" }
      ],
      accent: "#4A7C59",
      tag: "Diabète"
    },
    {
      id: 3,
      name: "Jus Elixir Heart",
      description: "Conçu pour soutenir la santé cardiovasculaire. Riche en antioxydants naturels pour un cœur fort et une circulation optimale.",
      image: "/Jus.jpg",
      volumes: [
        { size: "330 ml", price: "100 DA" },
        { size: "1 L", price: "300 DA" },
        { size: "2 L", price: "400 DA" }
      ],
      accent: "#A91D3A",
      tag: "Cardiaque"
    },
    {
      id: 4,
      name: "Jus Youth Elixir",
      description: "L'élixir de jeunesse à base de grenade et plantes médicinales. Favorise une peau saine, apporte énergie aux sportifs et complète l'alimentation des mères et enfants.",
      image: "/Jus 6.jpg",
      volumes: [
        { size: "330 ml", price: "150 DA" },
        { size: "1 L", price: "300 DA" },
        { size: "2 L", price: "400 DA" }
      ],
      accent: "#D4A5A5",
      tag: "Vitalité"
    }
  ]

  return (
    <div className="product-page">
      <div className="product-page__grain" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className={`product-hero product-hero--video ${isVisible ? 'product-hero--visible' : ''}`} ref={heroRef}>
        <div className="product-hero__video-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="product-hero__video"
          >
            <source src="/Bio_Elixir_Promotional_Video_Generation.mp4" type="video/mp4" />
          </video>
          <div className="product-hero__video-overlay"></div>
        </div>
        <div className="product-hero__bg">
          <div className="product-hero__glow product-hero__glow--1"></div>
          <div className="product-hero__glow product-hero__glow--2"></div>
        </div>

        <div className="product-hero__content">
          <Link to="/" className="product-hero__back">
            <span className="product-hero__back-arrow">←</span>
            <span>Retour</span>
          </Link>

          <div className="product-hero__text">
            <span className="product-hero__label">Collection Thérapeutique</span>
            <h1 className="product-hero__title">
              Les <span>Jus</span>
            </h1>
            <p className="product-hero__description">
              Une gamme de jus thérapeutiques à base d'extrait de grenade et de plantes médicinales.
              Conçue pour les personnes diabétiques et celles souffrant de problèmes cardiaques,
              elle complète l'alimentation des mères et des enfants, apporte de l'énergie aux sportifs
              et favorise une peau saine. 100% naturelles et sans produits chimiques.
            </p>
            <div className="product-hero__motto">
              <span className="product-hero__motto-line"></span>
              <span className="product-hero__motto-text">Une boisson pour tous</span>
              <span className="product-hero__motto-line"></span>
            </div>
          </div>
        </div>

        <div className="product-hero__scroll-indicator">
          <span>Découvrir</span>
          <div className="product-hero__scroll-line"></div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-section__container">
          <div className="products-grid">
            {products.map((product, index) => (
              <article
                key={product.id}
                className="product-card"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  '--product-accent': product.accent
                }}
              >
                <div className="product-card__image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card__image"
                  />
                  <div className="product-card__image-overlay"></div>
                  <span className="product-card__tag">{product.tag}</span>
                  <div className="product-card__shine"></div>
                </div>

                <div className="product-card__body">
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>

                  <div className="product-card__volumes">
                    <span className="product-card__volumes-title">Formats disponibles</span>
                    <div className="product-card__volume-list">
                      {product.volumes.map((vol, i) => (
                        <div key={i} className="product-card__volume">
                          <span className="product-card__volume-size">{vol.size}</span>
                          <span className="product-card__volume-divider"></span>
                          <span className="product-card__volume-price">{vol.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="product-card__footer">
                  <button className="product-card__btn">
                    <span>Commander</span>
                    <span className="product-card__btn-arrow">→</span>
                  </button>
                </div>

                <div className="product-card__border-accent"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-section__container">
          <h2 className="benefits-section__title">Pourquoi Nos Jus ?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card__number">01</div>
              <h3 className="benefit-card__title">100% Naturel</h3>
              <p className="benefit-card__text">Sans conservateurs, sans colorants artificiels, sans sucres ajoutés.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">02</div>
              <h3 className="benefit-card__title">Thérapeutique</h3>
              <p className="benefit-card__text">Formulés avec des plantes médicinales pour des bienfaits ciblés.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">03</div>
              <h3 className="benefit-card__title">Pour Tous</h3>
              <p className="benefit-card__text">Adaptés aux besoins spécifiques de chacun, de l'enfant au sportif.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LesJus
