import { useEffect, useRef, useState } from 'react'
import './Boutiques.css'

const Boutiques = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const boutiques = [
    {
      id: 1,
      name: "Boutique d'Accueil",
      subtitle: "Bienvenue chez BioElixir",
      description: "Découvrez l'univers BioElixir et explorez notre gamme complète de produits naturels à base de grenade. Un monde de bien-être vous attend.",
      image: "/hero image.jpg",
      accent: "var(--color-accent)",
    },
    {
      id: 2,
      name: "Les Jus",
      subtitle: "Élixirs Thérapeutiques",
      description: "Une gamme de jus thérapeutiques à base d'extrait de grenade et de plantes médicinales. Conçue pour les personnes diabétiques, les problèmes cardiaques, les mères et enfants, les sportifs et pour une peau saine. 100% naturel, sans produits chimiques.",
      image: "/Jus.jpg",
      accent: "var(--color-primary-light)",
    },
    {
      id: 3,
      name: "Compléments Bio",
      subtitle: "Oméga-5 & Punicalagin",
      description: "Complément alimentaire d'oméga-5, le plus rare extrait de grenade : 85% d'oméga-5, 12% d'oméga-6 et oméga-9, 3% d'antioxydants naturels. Favorise la circulation sanguine et un rythme cardiaque régulier. Également disponible : Punicalagin, antibactérien et anti-inflammatoire naturel.",
      image: "/Compléments.jpg",
      accent: "#4A7C59",
    },
    {
      id: 4,
      name: "Cosmétiques",
      subtitle: "Beauté Naturelle",
      description: "Collection de cosmétiques à base de grenade : savons anti-inflammatoires et thérapeutiques, henné naturel d'écorce de grenade, soins de la peau aux extraits de grenade, et teintures capillaires aux nuances naturelles. Pour le bien-être de chaque femme.",
      image: "/Cosmétiques.jpg",
      accent: "#D4A5A5",
    },
    {
      id: 5,
      name: "Huiles Essentielles",
      subtitle: "Pureté & Raffinement",
      description: "Une collection d'huiles essentielles naturelles et rares à usage nutritionnel, cosmétique et médicinal. Nous nous distinguons par la pureté de nos huiles et nos recommandations personnalisées adaptées à vos préférences et besoins.",
      image: "/oil.jpg",
      accent: "#E8B86D",
    },
    {
      id: 6,
      name: "Fruits Séchés",
      subtitle: "Douceurs Naturelles",
      description: "Large gamme de fruits secs pour les desserts, la consommation quotidienne ou les plats du Ramadan. Différents formats à prix compétitifs pour répondre à tous vos besoins.",
      image: "/Fruits Séchés.jpg",
      accent: "#C17F59",
    },
    {
      id: 7,
      name: "Pâtisserie",
      subtitle: "Confiserie Artisanale",
      description: "Confiserie originale et innovante à la saveur exquise de grenade : gâteaux à la grenade, desserts à la gélatine de grenade, et chocolat à la grenade. Une expérience gustative unique.",
      image: "/Pâtisserie.jpg",
      accent: "#8B4513",
    },
    {
      id: 8,
      name: "Papier Grenade",
      subtitle: "Innovation Naturelle",
      description: "Découvrez notre papier de grenade artisanal, une innovation unique alliant tradition et modernité. Un produit écologique et naturel issu de notre expertise en transformation de grenade.",
      image: "/Papier Grenade.jpg",
      accent: "#6B705C",
    },
    {
      id: 9,
      name: "Agro Nutrition",
      subtitle: "Nutrition Agricole",
      description: "Solutions nutritionnelles pour l'agriculture basées sur les bienfaits de la grenade. Une approche naturelle et durable pour enrichir vos cultures et améliorer les rendements.",
      image: "/Agro Nutritio.jpg",
      accent: "#2D5016",
    },
  ]

  return (
    <section
      id="boutiques"
      className={`boutiques ${isVisible ? 'boutiques--visible' : ''}`}
      ref={sectionRef}
    >
      <div className="boutiques__background">
        <div className="boutiques__bg-mesh"></div>
      </div>

      <div className="container">
        <div className="boutiques__header">
          <span className="boutiques__label">Nos Collections</span>
          <h2 className="boutiques__title">
            Explorez Nos <span>Boutiques</span>
          </h2>
          <p className="boutiques__subtitle">
            Chaque collection marie science botanique et raffinement pour régénérer,
            nourrir et sublimer naturellement.
          </p>
        </div>

        <div className="boutiques__grid">
          {boutiques.map((boutique, index) => (
            <article
              key={boutique.id}
              className={`boutique-card ${activeCard === boutique.id ? 'boutique-card--active' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                '--card-accent': boutique.accent
              }}
              onMouseEnter={() => setActiveCard(boutique.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="boutique-card__image-wrapper">
                <img
                  src={boutique.image}
                  alt={boutique.name}
                  className="boutique-card__image"
                  loading="lazy"
                />
                <div className="boutique-card__overlay"></div>
                <div className="boutique-card__shine"></div>
              </div>

              <div className="boutique-card__content">
                <span className="boutique-card__subtitle">{boutique.subtitle}</span>
                <h3 className="boutique-card__title">{boutique.name}</h3>
                <p className="boutique-card__description">{boutique.description}</p>
                <button className="boutique-card__cta">
                  <span>Découvrir</span>
                  <span className="boutique-card__cta-arrow">→</span>
                </button>
              </div>

              <div className="boutique-card__border"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Boutiques
