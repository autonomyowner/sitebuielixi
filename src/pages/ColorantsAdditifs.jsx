import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductPage.css'

const ColorantsAdditifs = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const phoneNumber = '213553666904'

  const products = [
    {
      id: 1,
      name: "Colorants Naturels",
      description: "Colorants naturels extraits de l'écorce de grenade, offrant des teintes rouges profondes et authentiques. Parfaits pour vos pâtisseries, boissons et préparations culinaires. Une alternative saine aux colorants synthétiques.",
      image: "/collron.jpg",
      features: ["Extrait d'écorce", "Teintes rouges", "100% naturel"],
      accent: "#8B3A3A",
      tag: "Bio GrenaGold"
    },
    {
      id: 2,
      name: "Punicalagin",
      description: "Extrait de grenade en poudre concentrée, idéal comme colorant naturel et additif nutritionnel. Offre une teinte rouge intense tout en enrichissant vos préparations avec des propriétés antioxydantes exceptionnelles. Parfait pour la pâtisserie, les boissons et les créations culinaires.",
      image: "/PUNICALAGIN Bio Elixir.jpg",
      features: ["Colorant rouge intense", "Antioxydant", "Multi-usage"],
      accent: "#C5A572",
      tag: "Premium"
    }
  ]

  const handleOrderClick = (productName) => {
    const message = `Bonjour Bio GrenaGold, je souhaite commander: ${productName}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

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
            <span className="product-hero__label">100% Naturel</span>
            <h1 className="product-hero__title">
              Colorants & <span>Additifs</span>
            </h1>
            <p className="product-hero__description">
              Colorants et additifs alimentaires naturels extraits de fruits, légumes et plantes.
              Donnez de la couleur et de la saveur à vos créations culinaires sans aucun produit chimique.
              Une alternative saine et écologique pour une cuisine plus naturelle.
            </p>
            <div className="product-hero__motto">
              <span className="product-hero__motto-line"></span>
              <span className="product-hero__motto-text">La nature au service de la cuisine</span>
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
          <h2 className="benefits-section__title">Pourquoi Choisir le Naturel ?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card__number">01</div>
              <h3 className="benefit-card__title">Santé</h3>
              <p className="benefit-card__text">Aucun produit chimique, que des ingrédients naturels.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">02</div>
              <h3 className="benefit-card__title">Qualité</h3>
              <p className="benefit-card__text">Couleurs et saveurs authentiques extraites de la nature.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">03</div>
              <h3 className="benefit-card__title">Écologie</h3>
              <p className="benefit-card__text">Production respectueuse de l'environnement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ColorantsAdditifs
