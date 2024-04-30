import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './components/HomePage/Homepage'
import Transformations from './components/TransformationPage/Transformations'
import ServicesPage from './components/ServicePage/ServicesPage'
import ContactPage from './components/ContactPage/ContactPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Homepage />} path="/"  />
        <Route element={<Transformations />} path='/transformations' />
        <Route element={<ServicesPage />} path='/services' />
        <Route element={<ContactPage />} path='/contact' />
      </Routes>
      <Footer />
    </>
  )
}

export default App
