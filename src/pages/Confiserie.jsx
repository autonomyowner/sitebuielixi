import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductPage.css'

const Confiserie = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const products = [
    {
      id: 1,
      name: "Gâteaux à la Grenade",
      description: "Pâtisseries artisanales infusées à la grenade. Une création originale qui marie la douceur traditionnelle avec les notes uniques de ce fruit précieux.",
      image: "/Pâtisserie.jpg",
      features: ["Artisanal", "Grenade naturelle", "Sans colorants"],
      accent: "#A91D3A",
      tag: "Signature"
    },
    {
      id: 2,
      name: "Desserts Gélatine Grenade",
      description: "Desserts à la gélatine délicatement parfumés à la grenade. Une texture fondante et une saveur subtile pour une expérience gustative raffinée.",
      image: "/Pâtisserie.jpg",
      features: ["Texture fondante", "Léger", "Rafraîchissant"],
      accent: "#D4A5A5",
      tag: "Léger"
    },
    {
      id: 3,
      name: "Chocolat à la Grenade",
      description: "Chocolat artisanal enrichi d'extraits de grenade. L'alliance parfaite entre l'intensité du cacao et la fraîcheur fruitée de la grenade.",
      image: "/Pâtisserie.jpg",
      features: ["Cacao premium", "Grenade bio", "Fait main"],
      accent: "#4A3728",
      tag: "Gourmand"
    },
    {
      id: 4,
      name: "Colorants Naturels",
      description: "Colorants alimentaires 100% naturels extraits de fruits et légumes. Donnez de la couleur à vos créations sans produits chimiques.",
      image: "/Pâtisserie.jpg",
      features: ["100% naturel", "Sans additifs", "Multi-usage"],
      accent: "#C9A962",
      tag: "Bio"
    }
  ]

  return (
    <div className="product-page">
      <div className="product-page__grain" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className={`product-hero ${isVisible ? 'product-hero--visible' : ''}`}>
        <div className="product-hero__bg">
          <div className="product-hero__mesh"></div>
          <div className="product-hero__glow product-hero__glow--1"></div>
          <div className="product-hero__glow product-hero__glow--2"></div>
        </div>

        <div className="product-hero__content">
          <Link to="/" className="product-hero__back">
            <span className="product-hero__back-arrow">←</span>
            <span>Retour</span>
          </Link>

          <div className="product-hero__text">
            <span className="product-hero__label">Confiserie & Additifs</span>
            <h1 className="product-hero__title">
              Colorants & <span>Pâtisserie</span>
            </h1>
            <p className="product-hero__description">
              Une confiserie originale et innovante, à la saveur exquise de grenade.
              Gâteaux à la grenade, desserts à la gélatine de grenade, et chocolat à la grenade.
              Complétée par notre gamme de colorants et additifs alimentaires 100% naturels.
            </p>
            <div className="product-hero__motto">
              <span className="product-hero__motto-line"></span>
              <span className="product-hero__motto-text">L'art de la gourmandise naturelle</span>
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
                  <div className="product-card__image-placeholder">
                    <div className="product-card__image-overlay"></div>
                  </div>
                  <span className="product-card__tag">{product.tag}</span>
                  <div className="product-card__shine"></div>
                </div>

                <div className="product-card__body">
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>

                  <div className="product-card__features">
                    <span className="product-card__features-title">Caractéristiques</span>
                    <div className="product-card__features-list">
                      {product.features.map((feature, i) => (
                        <span key={i} className="product-card__feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="product-card__footer">
                  <button className="product-card__btn">
                    <span>Découvrir</span>
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
          <h2 className="benefits-section__title">Notre Philosophie</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card__number">01</div>
              <h3 className="benefit-card__title">Innovation</h3>
              <p className="benefit-card__text">Créations originales à la saveur unique de grenade.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">02</div>
              <h3 className="benefit-card__title">Artisanal</h3>
              <p className="benefit-card__text">Fait main avec passion et savoir-faire traditionnel.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">03</div>
              <h3 className="benefit-card__title">Naturel</h3>
              <p className="benefit-card__text">Sans colorants ni additifs chimiques.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Confiserie
