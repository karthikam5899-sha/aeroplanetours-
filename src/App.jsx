import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlightSearch from './components/FlightSearch'
import Destinations from './components/Destinations'
import Offers from './components/Offers'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-ink">
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <FlightSearch />
        <Destinations />
        <Offers />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
