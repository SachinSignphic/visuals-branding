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
import { useEffect } from 'react'

function App() {
  const windowHeight = window.innerHeight;
  const scale = (number, inMin, inMax, outMin, outMax) => (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  const rootElem = document.getElementById("root");

  useEffect(() => {
    const handleScroll = () => {
      let opValue = 0.6 - scale(window.scrollY, 0, windowHeight, 0, 0.6)
      rootElem.style.setProperty("--bg-opacity", (opValue>0)? opValue : 0);
      if (opValue <= 0) return; 
      // console.log(window.scrollY, opValue);
    }
    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll); }
  },[rootElem.style, windowHeight]);

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
