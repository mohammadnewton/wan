import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Notice from './components/Notice'
import Services from './components/Services'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Notice />
      <Services />
      <Contact />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
