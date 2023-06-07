import { Navbar, Footer, LinedBackground, AboutSection, WhatWeDo, TeamSection, PromptSection } from "../components"

const About = () => {
  return (
    <>
      <Navbar />
        <LinedBackground>
          <AboutSection />
          <WhatWeDo scrollTo="#team-section" />
          <TeamSection scrollTo="#prompt-section" />
          <PromptSection scrollTo="#footer" />
        </LinedBackground>
      <Footer />
    </>
  )
}

export default About