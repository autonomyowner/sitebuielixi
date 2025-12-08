import { useEffect, useRef, useState } from 'react'
import './ProductsShowcase.css'

const ProductsShowcase = () => {
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

  const categories = [
    'Jus Thérapeutiques',
    'Cosmétiques',
    'Huiles Essentielles',
    'Compléments Alimentaires',
    'Fruits Secs',
    'Confiseries',
    'Papier Kraft',
    'Colorants Naturels'
  ]

  return (
    <section
      className={`products-showcase ${isVisible ? 'products-showcase--visible' : ''}`}
      ref={sectionRef}
    >
      <div className="products-showcase__video-container">
        <video
          className="products-showcase__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Cinematic_Product_Commercial_Video_Generation.mp4" type="video/mp4" />
        </video>
        <div className="products-showcase__video-overlay"></div>
      </div>

      <div className="products-showcase__content">
        <div className="container">
          <span className="products-showcase__label">Notre Gamme</span>
          <h2 className="products-showcase__title">
            Une Variété de <span>Produits</span>
          </h2>
          <p className="products-showcase__description">
            Découvrez notre gamme complète de produits à base de grenade.
            De la nutrition à la beauté, nous transformons ce fruit précieux
            en solutions naturelles pour votre bien-être quotidien.
          </p>

          <div className="products-showcase__categories">
            {categories.map((category, index) => (
              <span
                key={category}
                className="products-showcase__category"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="products-showcase__motto">
            <span className="products-showcase__motto-line"></span>
            <span className="products-showcase__motto-text">La grenade sous toutes ses formes</span>
            <span className="products-showcase__motto-line"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsShowcase
