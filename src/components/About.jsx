import { useEffect, useRef, useState } from 'react'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      title: '100% Naturel',
      description: 'Sans produits chimiques ni additifs artificiels',
    },
    {
      title: 'Science Botanique',
      description: 'Expertise et recherche au service de votre santé',
    },
    {
      title: 'Qualité Premium',
      description: 'Sélection rigoureuse des meilleurs extraits de grenade',
    },
    {
      title: 'Bien-être Global',
      description: 'Régénérer, nourrir et sublimer naturellement',
    },
  ]

  return (
    <section
      id="apropos"
      className={`about ${isVisible ? 'about--visible' : ''}`}
      ref={sectionRef}
    >
      <div className="about__background">
        <div className="about__bg-gradient"></div>
        <div className="about__bg-pattern"></div>
      </div>

      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="about__label">Notre Histoire</span>
            <h2 className="about__title">
              L'Excellence de la <span>Grenade</span>
            </h2>
            <div className="about__text">
              <p>
                Bio GrenaGold révèle la puissance de la grenade à travers une gamme complète
                et diversifiée, conçue pour répondre à tous vos besoins de bien-être.
              </p>
              <p>
                Chaque collection Bio GrenaGold marie science botanique et raffinement pour
                régénérer, nourrir et sublimer naturellement. De nos jus thérapeutiques
                à nos cosmétiques précieux, nous vous offrons le meilleur de la nature.
              </p>
              <p className="about__highlight">
                Notre devise : Une boisson pour tous.
              </p>
            </div>

            <div className="about__divider"></div>

            <div className="about__features">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="about__feature"
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  <h4 className="about__feature-title">{feature.title}</h4>
                  <p className="about__feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about__visual">
            <div className="about__image-container">
              <img
                src="/grenagold/Gemini_Generated_Image_9l4ayh9l4ayh9l4a.png"
                alt="Bio GrenaGold Jus de Grenade"
                className="about__image"
              />
              <div className="about__image-overlay"></div>
            </div>
            <div className="about__image-decoration"></div>
            <div className="about__floating-card">
              <span className="about__floating-number">8</span>
              <span className="about__floating-text">Collections Uniques</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
