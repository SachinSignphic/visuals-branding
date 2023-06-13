import { Footer, Navbar, LinedBackground, ConsultationSection, FadingBackground } from '../components'

const Contact = () => {
  return (
    <>
      <FadingBackground />
      <Navbar />
      <LinedBackground style={{marginTop: "10rem"}}>
        <ConsultationSection />
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Contact