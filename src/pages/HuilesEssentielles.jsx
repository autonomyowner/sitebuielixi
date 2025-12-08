import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductPage.css'

const HuilesEssentielles = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const products = [
    {
      id: 1,
      name: "Huile de Grenade",
      description: "L'huile essentielle de grenade, rare et précieuse. Riche en acide punicique, elle nourrit la peau en profondeur et possède des propriétés anti-âge remarquables.",
      image: "/photo_2025-12-03_19-57-29 (2).jpg",
      uses: ["Cosmétique", "Nutritionnel", "Médicinal"],
      accent: "#A91D3A",
      tag: "Premium"
    },
    {
      id: 2,
      name: "Huile d'Argan",
      description: "L'or liquide du Maroc. Huile précieuse aux vertus nourrissantes et protectrices pour la peau et les cheveux. Riche en vitamine E et en acides gras essentiels.",
      image: "/photo_2025-12-03_19-57-29 (2).jpg",
      uses: ["Soin visage", "Soin cheveux", "Massage"],
      accent: "#C9A962",
      tag: "Rare"
    },
    {
      id: 3,
      name: "Huile de Nigelle",
      description: "La graine bénie aux mille vertus. Huile aux propriétés anti-inflammatoires et immunostimulantes reconnues depuis l'Antiquité pour ses bienfaits thérapeutiques.",
      image: "/photo_2025-12-03_19-57-29 (2).jpg",
      uses: ["Immunité", "Digestion", "Peau"],
      accent: "#2D5016",
      tag: "Ancestral"
    },
    {
      id: 4,
      name: "Huile de Rose",
      description: "L'essence de la rose de Damas. Une huile exceptionnellement précieuse aux propriétés apaisantes et régénérantes. Le summum du luxe naturel.",
      image: "/photo_2025-12-03_19-57-29 (2).jpg",
      uses: ["Anti-stress", "Régénérant", "Parfum"],
      accent: "#D4A5A5",
      tag: "Luxe"
    }
  ]

  return (
    <div className="product-page">
      <div className="product-page__grain" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className={`product-hero ${isVisible ? 'product-hero--visible' : ''}`}>
        <div className="product-hero__bg">
          <video
            className="product-hero__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Generating_Video_From_Image_Description.mp4" type="video/mp4" />
          </video>
          <div className="product-hero__video-overlay"></div>
        </div>

        <div className="product-hero__content">
          <Link to="/" className="product-hero__back">
            <span className="product-hero__back-arrow">←</span>
            <span>Retour</span>
          </Link>

          <div className="product-hero__text">
            <span className="product-hero__label">Pureté & Raffinement</span>
            <h1 className="product-hero__title">
              Huiles <span>Essentielles</span>
            </h1>
            <p className="product-hero__description">
              Une collection d'huiles essentielles, naturelles et rares à usage nutritionnel,
              cosmétique et médicinal. Nous nous distinguons par la pureté de nos huiles
              et par nos recommandations et formules personnalisées, adaptées à vos préférences
              et à vos besoins.
            </p>
            <div className="product-hero__motto">
              <span className="product-hero__motto-line"></span>
              <span className="product-hero__motto-text">L'essence de la nature</span>
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

                  <div className="product-card__uses">
                    <span className="product-card__uses-title">Usages</span>
                    <div className="product-card__uses-list">
                      {product.uses.map((use, i) => (
                        <span key={i} className="product-card__use-tag">
                          {use}
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
          <h2 className="benefits-section__title">Notre Promesse</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card__number">01</div>
              <h3 className="benefit-card__title">Pureté</h3>
              <p className="benefit-card__text">Huiles 100% pures, sans additifs ni diluants.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">02</div>
              <h3 className="benefit-card__title">Rareté</h3>
              <p className="benefit-card__text">Sélection d'huiles rares et précieuses du monde entier.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">03</div>
              <h3 className="benefit-card__title">Conseil</h3>
              <p className="benefit-card__text">Recommandations personnalisées selon vos besoins.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HuilesEssentielles
