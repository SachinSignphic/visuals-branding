import { Footer, Navbar, LinedBackground, ConsultationSection, FadingBackground } from '../components'
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    document.title = 'Visuals Branding | Contact'
  }, []);
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