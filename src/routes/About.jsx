import { useEffect } from "react"
import { Navbar, Footer, LinedBackground, AboutSection, WhatWeDo, TeamSection, PromptSection } from "../components"

const About = () => {
  useEffect(() => {
    document.title = 'Visuals Branding | About'
  }, []);
  
  return (
    <>
      <Navbar />
        <LinedBackground>
          <AboutSection />
          <WhatWeDo scrollTo="#team-section" />
          <TeamSection scrollTo="#prompt-section" />
          <PromptSection scrollTo="#about" style={{marginRight: "5.3rem", transform: "rotate(180deg)"}}/>
        </LinedBackground>
      <Footer />
    </>
  )
}

export default About