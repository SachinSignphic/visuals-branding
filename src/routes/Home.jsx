// import { Link } from 'react-router-dom'
import { Navbar, Hero, Footer, LinedBackground, TransformSection, WhatWeDo } from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LinedBackground>
        <TransformSection />
        <WhatWeDo />
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Home