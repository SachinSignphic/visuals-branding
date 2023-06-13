import './App.css'
import Home from './routes/Home'
import Contact from './routes/Contact'
import CustomService from './routes/CustomService'
import Portfolio from './routes/Portfolio'
import About from './routes/About'
import { Routes, Route, Navigate } from 'react-router-dom'
import Consultation from './routes/Consultation'
import PortfolioProduct from './routes/PortfolioProduct'
import Page404 from './routes/Page404'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='portfolio/:id' element={<PortfolioProduct />} />
        <Route path='/custom-service' element={<CustomService />} />
        <Route path='/free-consultation' element={ <Consultation /> } />
        <Route path='/error' element={<Page404 />} />
        <Route path='*' element={<Navigate to='/error' replace/>} />
      </Routes>
    </>
  )
}

export default App
