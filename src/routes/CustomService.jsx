import { Footer, LinedBackground, Navbar, CustomServiceHeader, ServiceSectionRTL } from "../components"

const CustomService = () => {
  return (
    <>
      <Navbar />
      <LinedBackground style={{marginTop: "10rem"}}>
        <CustomServiceHeader />
      {/* <ServiceSectionLTR /> */}
      <ServiceSectionRTL heading="Branding" subheading="Our Pack Builder" desc="bruh" />
      {/* <ServiceSectionLTR /> */}
      {/* <ServiceSectionRTL /> */}
      {/* <ServiceSectionLTR /> */}
      </LinedBackground>
      <Footer />
    </>
  )
}

export default CustomService