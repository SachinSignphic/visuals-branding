import { CustomServiceHeader, Footer, LinedBackground, Navbar, PortfolioCards, PortfolioMain } from "../components"
import { useEffect } from "react";
const Portfolio = () => {
  useEffect(() => {
    document.title = 'Visuals Branding | Portfolio'
  }, []);
  return (
    <>
      <Navbar />
      <LinedBackground style={{marginTop: "10rem", gap: "5rem"}}>
        <CustomServiceHeader whiteText={"Portfolio"} />
        <PortfolioMain />
        <PortfolioCards />
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Portfolio