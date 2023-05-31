import './App.css'
import Home from './routes/Home'
import Contact from './routes/Contact'
import CustomService from './routes/CustomService'
import Portfolio from './routes/Portfolio'
import About from './routes/About'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/customer-service' element={<CustomService />} />
      </Routes>
    </>
  )
}

export default App
