import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProductsShowcase from './components/ProductsShowcase'
import Boutiques from './components/Boutiques'
import Footer from './components/Footer'
import LesJus from './pages/LesJus'
import Complements from './pages/Complements'
import Cosmetiques from './pages/Cosmetiques'
import HuilesEssentielles from './pages/HuilesEssentielles'
import FruitsSecs from './pages/FruitsSecs'
import Confiserie from './pages/Confiserie'
import PapierGrenade from './pages/PapierGrenade'
import ColorantsAdditifs from './pages/ColorantsAdditifs'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProductsShowcase />
      <Boutiques />
    </>
  )
}

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <>
      {/* Grain Overlay for texture */}
      <div className="grain-overlay" aria-hidden="true"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/les-jus" element={<LesJus />} />
          <Route path="/complements" element={<Complements />} />
          <Route path="/cosmetiques" element={<Cosmetiques />} />
          <Route path="/huiles-essentielles" element={<HuilesEssentielles />} />
          <Route path="/fruits-secs" element={<FruitsSecs />} />
          <Route path="/confiserie" element={<Confiserie />} />
          <Route path="/papier-grenade" element={<PapierGrenade />} />
          <Route path="/colorants-additifs" element={<ColorantsAdditifs />} />
        </Routes>
      </main>

      {/* Footer - show on all pages */}
      <Footer />
    </>
  )
}

export default App
