import { ConsultationSection, Footer, LinedBackground, Navbar } from "../components"
import { useEffect } from "react";
const Consultation = () => {
  useEffect(() => {
    document.title = 'Visuals Branding | Consultation'
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

export default Consultation