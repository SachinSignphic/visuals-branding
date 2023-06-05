import { Navbar, Footer, LinedBackground, AboutSection } from "../components"

const About = () => {
  return (
    <>
      <Navbar />
        <LinedBackground>
          <AboutSection />
        </LinedBackground>
      <Footer />
    </>
  )
}

export default About