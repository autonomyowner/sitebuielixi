import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductPage.css'

const FruitsSecs = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const phoneNumber = '213553666904'

  const handleOrderClick = (productName) => {
    const message = `Bonjour BioElixir, je souhaite commander: ${productName}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const products = [
    {
      id: 1,
      name: "Figues Séchées",
      description: "Figues séchées naturellement, riches en fibres et en minéraux. Un délice méditerranéen pour accompagner vos plats ou déguster seul.",
      image: "/Fruits Séchés.jpg",
      formats: ["200g", "400g", "800g"],
      accent: "#6B4423",
      tag: "Naturel"
    },
    {
      id: 2,
      name: "Mix Ramadan",
      description: "Assortiment spécial composé pour les soirées du Ramadan. Un mélange équilibré de fruits secs et de noix pour rompre le jeûne en douceur.",
      image: "/fakya.jpg",
      formats: ["500g", "1kg", "2kg"],
      accent: "#4A7C59",
      tag: "Spécial"
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
            <span className="product-hero__label">Douceurs Naturelles</span>
            <h1 className="product-hero__title">
              Fruits <span>Secs</span>
            </h1>
            <p className="product-hero__description">
              Un magasin proposant une large gamme de fruits secs pour les desserts,
              la consommation quotidienne ou les plats du Ramadan. Nous offrons différents
              formats à des prix compétitifs pour répondre à tous vos besoins.
            </p>
            <div className="product-hero__motto">
              <span className="product-hero__motto-line"></span>
              <span className="product-hero__motto-text">La nature en gourmandise</span>
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
                    loading="lazy"
                  />
                  <div className="product-card__image-overlay"></div>
                  <span className="product-card__tag">{product.tag}</span>
                  <div className="product-card__shine"></div>
                </div>

                <div className="product-card__body">
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>

                  <div className="product-card__formats">
                    <span className="product-card__formats-title">Formats disponibles</span>
                    <div className="product-card__formats-list">
                      {product.formats.map((format, i) => (
                        <span key={i} className="product-card__format-tag">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="product-card__footer">
                  <button
                    className="product-card__btn"
                    onClick={() => handleOrderClick(product.name)}
                  >
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
          <h2 className="benefits-section__title">Notre Sélection</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card__number">01</div>
              <h3 className="benefit-card__title">Qualité</h3>
              <p className="benefit-card__text">Fruits secs sélectionnés avec soin pour leur saveur.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">02</div>
              <h3 className="benefit-card__title">Variété</h3>
              <p className="benefit-card__text">Large gamme pour tous les goûts et toutes les occasions.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">03</div>
              <h3 className="benefit-card__title">Prix</h3>
              <p className="benefit-card__text">Différents formats à des prix compétitifs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FruitsSecs
