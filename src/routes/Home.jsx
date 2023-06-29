import { useEffect } from 'react';
import { Navbar, Hero, Footer, LinedBackground, TransformSection, WhatWeDo, OurCustomers, PromptSection, TeamSection, FadingBackground } from '../components';

const Home = () => {
  useEffect(() => {
    document.title = 'Visuals Branding | Home'
  }, [])
  
  return (
    <>
      <FadingBackground />
      <Navbar />
      <Hero />
      <LinedBackground>
        <TransformSection scrollTo="#what-we-do" style={{position: "absolute", left: "8.25rem"}}/>
        <WhatWeDo scrollTo="#creators" />
        <OurCustomers scrollTo="#prompt-section"/>
        <PromptSection scrollTo="#team-section" style={{marginRight: "5.3rem"}}/>
        <TeamSection scrollTo="#hero" style={{transform: "rotate(180deg)"}}/>
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Home;