import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductPage.css'

const Cosmetiques = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const products = [
    {
      id: 1,
      name: "Henné de Grenade Naturel",
      description: "Henné naturel fabriqué à partir d'écorce de grenade. Une coloration douce et naturelle qui renforce les cheveux tout en leur apportant brillance et vitalité.",
      image: "/Cosmétiques.jpg",
      price: "200 DA",
      variants: ["100% naturel", "Écorce de grenade", "Fortifiant"],
      accent: "#8B4513",
      tag: "Naturel"
    },
    {
      id: 2,
      name: "Savons Solides Thérapeutiques",
      description: "Savons solides antibactériens et thérapeutiques pour la peau et les plaies. Formulés avec différents pourcentages de principes actifs selon vos besoins.",
      image: "/savon.jpg",
      priceRange: "650 DA - 1 400 DA",
      priceNote: "selon le % de principes actifs",
      variants: ["Antibactérien", "Thérapeutique", "Soin plaies"],
      accent: "#D4A5A5",
      tag: "Thérapeutique"
    },
    {
      id: 3,
      name: "Savon Solide Classique",
      description: "Savon solide classique amélioré aux extraits de grenade. Un nettoyage doux et efficace pour tous les types de peau, enrichi en actifs naturels.",
      image: "/savon.jpg",
      price: "80 DA",
      variants: ["Doux", "Tous types de peau", "Amélioré"],
      accent: "#C9A962",
      tag: "Classique"
    },
    {
      id: 4,
      name: "Savon Liquide Spécialisé",
      description: "Savon liquide antibactérien et antiseptique spécialement formulé pour les plaies. Format pratique de 500ml pour un usage quotidien ou professionnel.",
      image: "/savon leqid.png",
      price: "1 200 DA",
      quantity: "500 ml",
      variants: ["Antibactérien", "Antiseptique", "Soin plaies"],
      accent: "#4A7C59",
      tag: "Spécialisé"
    },
    {
      id: 5,
      name: "Teintures Capillaires Naturelles",
      description: "Teintures capillaires dans une variété de nuances naturelles. Des couleurs vibrantes et durables sans produits chimiques agressifs pour des cheveux sains et éclatants.",
      image: "/hair collor.jpg",
      price: "650 DA",
      variants: ["Nuances naturelles", "Sans ammoniaque", "Brillance"],
      accent: "#6B4423",
      tag: "Couleur"
    }
  ]

  return (
    <div className="product-page">
      <div className="product-page__grain" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className={`product-hero product-hero--video ${isVisible ? 'product-hero--visible' : ''}`}>
        <div className="product-hero__video-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="product-hero__video"
          >
            <source src="/Soap_Video_Generation_Request.mp4" type="video/mp4" />
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
            <span className="product-hero__label">Beauté Naturelle</span>
            <h1 className="product-hero__title">
              <span>Cosmétiques</span>
            </h1>
            <p className="product-hero__description">
              Cette gamme diversifiée comprend une collection de cosmétiques à base de grenade :
              savons anti-inflammatoires et thérapeutiques, henné naturel d'écorce de grenade,
              soins de la peau aux extraits précieux, et teintures capillaires aux nuances naturelles.
              Le tout pour le bien-être de chaque femme.
            </p>
            <div className="product-hero__motto">
              <span className="product-hero__motto-line"></span>
              <span className="product-hero__motto-text">La beauté au naturel</span>
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

                  <div className="product-card__pricing">
                    <div className="product-card__price-box">
                      {product.quantity && (
                        <span className="product-card__quantity">{product.quantity}</span>
                      )}
                      {product.price ? (
                        <span className="product-card__price">{product.price}</span>
                      ) : (
                        <div className="product-card__price-range-container">
                          <span className="product-card__price">{product.priceRange}</span>
                          {product.priceNote && (
                            <span className="product-card__price-note">{product.priceNote}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="product-card__variants">
                    <span className="product-card__variants-title">Caractéristiques</span>
                    <div className="product-card__variants-list">
                      {product.variants.map((variant, i) => (
                        <span key={i} className="product-card__variant-tag">
                          {variant}
                        </span>
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
      <section className="benefits-section benefits-section--with-bg">
        <div className="benefits-section__bg-image">
          <img src="/Cosmétiques pack.jpg" alt="Cosmétiques Bio Elixir" />
          <div className="benefits-section__bg-overlay"></div>
        </div>
        <div className="benefits-section__container">
          <h2 className="benefits-section__title">Notre Engagement Beauté</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card__number">01</div>
              <h3 className="benefit-card__title">Naturel</h3>
              <p className="benefit-card__text">Ingrédients naturels et extraits de grenade purs.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">02</div>
              <h3 className="benefit-card__title">Thérapeutique</h3>
              <p className="benefit-card__text">Formules antibactériennes et apaisantes.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">03</div>
              <h3 className="benefit-card__title">Pour Toutes</h3>
              <p className="benefit-card__text">Adapté à tous les types de peau et de cheveux.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cosmetiques
