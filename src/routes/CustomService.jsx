import { Footer, LinedBackground, Navbar, CustomServiceHeader, ServiceSectionRTL, ServiceSectionLTR } from "../components"

const CustomService = () => {
  return (
    <>
      <Navbar />
      <LinedBackground style={{marginTop: "10rem", gap: "10rem"}}>
        <CustomServiceHeader />
      {/* <ServiceSectionLTR /> */}
      <ServiceSectionRTL 
        heading="Branding" 
        whiteText="Our" 
        purpleText="Pack Builder" 
        pMarkup={
          <p className="ff-gillroy-l fs-2m sec-color">
            We&lsquo;ll refine this list and your quote once we receive the order and provide suggestions of how you can best use your resources.
                <br /><br />1st things first, your brand. Whether you&lsquo;re looking for a new logo design or a full brand guide we have you covered.
          </p>
        }   
      />
      <ServiceSectionLTR 
        heading="Steam Overlays Package" 
        whiteText="Our" 
        purpleText="Overlays" 
        pMarkup={
          <p className="ff-gillroy-l fs-2m sec-color">
            We&lsquo;ll refine this list and your quote once we receive the order and provide suggestions of how you can best use your resources.
                <br /><br />1st things first, your brand. Whether you&lsquo;re looking for a new logo design or a full brand guide we have you covered.
          </p>
        }   
      />
      <ServiceSectionRTL 
        heading="Custom Widgets" 
        whiteText="Our" 
        purpleText="Widgets" 
        pMarkup={
          <p className="ff-gillroy-l fs-2m sec-color">
            We&lsquo;ll refine this list and your quote once we receive the order and provide suggestions of how you can best use your resources.
                <br /><br />1st things first, your brand. Whether you&lsquo;re looking for a new logo design or a full brand guide we have you covered.
          </p>
        }   
      />
      <ServiceSectionLTR 
        heading="Motion Design & Animation" 
        whiteText="Our" 
        purpleText="Motion Package" 
        pMarkup={
          <p className="ff-gillroy-l fs-2m sec-color">
            We&lsquo;ll refine this list and your quote once we receive the order and provide suggestions of how you can best use your resources.
                <br /><br />1st things first, your brand. Whether you&lsquo;re looking for a new logo design or a full brand guide we have you covered.
          </p>
        }   
      />
      {/* <ServiceSectionLTR /> */}
      {/* <ServiceSectionRTL /> */}
      {/* <ServiceSectionLTR /> */}
      </LinedBackground>
      <Footer />
    </>
  )
}

export default CustomService