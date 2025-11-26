import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductPage.css'

const Complements = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const products = [
    {
      id: 1,
      name: "Oméga-5 Premium",
      description: "Le plus rare des omégas, extrait de la grenade. Une combinaison unique entre 85% d'oméga-5, 12% d'oméga-6 et 9, ainsi que 3% d'antioxydants naturels. Favorise une bonne circulation sanguine et un rythme cardiaque régulier. Facilement assimilé par l'organisme.",
      image: "/Compléments omega 3.jpg",
      price: "7 000 DA",
      quantity: "60 gélules",
      benefits: ["Circulation sanguine", "Santé cardiaque", "Antioxydant"],
      accent: "#4A7C59",
      tag: "Rare"
    },
    {
      id: 2,
      name: "Punicalagin",
      description: "Agent antibactérien et anti-inflammatoire naturel extrait de la grenade. Puissant composé polyphénolique reconnu pour ses propriétés thérapeutiques exceptionnelles. Soutient le système immunitaire et combat l'inflammation naturellement.",
      image: "/PUNICALAGIN Bio Elixir.jpg",
      price: "4 000 DA",
      quantity: "60 gélules",
      benefits: ["Anti-inflammatoire", "Antibactérien", "Immunité"],
      accent: "#A91D3A",
      tag: "Puissant"
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
            <source src="/complementsvideo.mp4" type="video/mp4" />
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
            <span className="product-hero__label">Nutrition Avancée</span>
            <h1 className="product-hero__title">
              Compléments <span>Alimentaires</span>
            </h1>
            <p className="product-hero__description">
              Un complément alimentaire d'oméga-5, le plus rare des omégas, extrait de la grenade.
              Il associe 85% d'oméga-5, 12% d'oméga-6 et d'oméga-9, ainsi que 3% d'antioxydants naturels.
              Découvrez également le Punicalagin, agent antibactérien et anti-inflammatoire naturel.
            </p>
            <div className="product-hero__motto">
              <span className="product-hero__motto-line"></span>
              <span className="product-hero__motto-text">La puissance de la grenade</span>
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
          <div className="products-grid products-grid--featured">
            {products.map((product, index) => (
              <article
                key={product.id}
                className="product-card product-card--supplement"
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
                      <span className="product-card__quantity">{product.quantity}</span>
                      <span className="product-card__price">{product.price}</span>
                    </div>
                  </div>

                  <div className="product-card__benefits">
                    <span className="product-card__benefits-title">Bienfaits</span>
                    <div className="product-card__benefits-list">
                      {product.benefits.map((benefit, i) => (
                        <span key={i} className="product-card__benefit-tag">
                          {benefit}
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

      {/* Composition Section */}
      <section className="composition-section">
        <div className="composition-section__container">
          <h2 className="composition-section__title">Composition Oméga-5</h2>
          <div className="composition-grid">
            <div className="composition-card">
              <div className="composition-card__percentage">85%</div>
              <h3 className="composition-card__name">Oméga-5</h3>
              <p className="composition-card__desc">Acide punicique rare, unique à la grenade</p>
            </div>
            <div className="composition-card">
              <div className="composition-card__percentage">12%</div>
              <h3 className="composition-card__name">Oméga-6 & 9</h3>
              <p className="composition-card__desc">Acides gras essentiels complémentaires</p>
            </div>
            <div className="composition-card">
              <div className="composition-card__percentage">3%</div>
              <h3 className="composition-card__name">Antioxydants</h3>
              <p className="composition-card__desc">Protection cellulaire naturelle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-section__container">
          <h2 className="benefits-section__title">Pourquoi Nos Compléments ?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card__number">01</div>
              <h3 className="benefit-card__title">Rareté</h3>
              <p className="benefit-card__text">L'oméga-5 est l'un des acides gras les plus rares au monde.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">02</div>
              <h3 className="benefit-card__title">Pureté</h3>
              <p className="benefit-card__text">Extraction naturelle sans solvants chimiques.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">03</div>
              <h3 className="benefit-card__title">Efficacité</h3>
              <p className="benefit-card__text">Haute biodisponibilité pour une absorption optimale.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Complements
