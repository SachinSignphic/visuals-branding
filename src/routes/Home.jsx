// import { Link } from 'react-router-dom'
import { Navbar, Hero, Footer, LinedBackground, TransformSection, WhatWeDo, OurCustomers, PromptSection, TeamSection } from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LinedBackground>
        <TransformSection />
        <WhatWeDo />
        <OurCustomers />
        <PromptSection />
        <TeamSection />
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Home