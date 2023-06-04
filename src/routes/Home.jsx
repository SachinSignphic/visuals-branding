// import { Link } from 'react-router-dom'
import { Navbar, Hero, Footer, LinedBackground, TransformSection, WhatWeDo, OurCustomers } from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LinedBackground>
        <TransformSection />
        <WhatWeDo />
        <OurCustomers />
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Home