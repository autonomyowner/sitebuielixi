import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Boutiques from './components/Boutiques'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Grain Overlay for texture */}
      <div className="grain-overlay" aria-hidden="true"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Boutiques />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
