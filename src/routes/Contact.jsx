import { Footer, Navbar, LinedBackground, ConsultationSection } from '../components'
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    document.title = 'Visuals Branding | Contact'
  }, []);
  return (
    <>
      <Navbar />
      <LinedBackground style={{marginTop: "10rem"}}>
        <ConsultationSection />
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Contact