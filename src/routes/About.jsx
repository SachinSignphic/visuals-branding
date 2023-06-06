import { Navbar, Footer, LinedBackground, AboutSection, WhatWeDo, TeamSection, PromptSection } from "../components"

const About = () => {
  return (
    <>
      <Navbar />
        <LinedBackground>
          <AboutSection />
          <WhatWeDo />
          <TeamSection />
          <PromptSection />
        </LinedBackground>
      <Footer />
    </>
  )
}

export default About