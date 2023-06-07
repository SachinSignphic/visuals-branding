import { ConsultationSection, Footer, LinedBackground, Navbar } from "../components"

const Consultation = () => {
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