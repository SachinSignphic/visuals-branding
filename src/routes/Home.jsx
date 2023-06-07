// import { Link } from 'react-router-dom'
import { Navbar, Hero, Footer, LinedBackground, TransformSection, WhatWeDo, OurCustomers, PromptSection, TeamSection } from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LinedBackground>
        <TransformSection scrollTo="#what-we-do" />
        <WhatWeDo scrollTo="#creators" />
        <OurCustomers scrollTo="#prompt-section"/>
        <PromptSection scrollTo="#team-section"/>
        <TeamSection scrollTo="#footer" />
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Home