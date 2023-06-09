import { CustomServiceHeader, Footer, LinedBackground, Navbar, PortfolioCards, PortfolioMain } from "../components"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <LinedBackground style={{marginTop: "10rem", gap: "5rem"}}>
        <CustomServiceHeader whiteText={"Portfolio"} />
        <PortfolioMain />
        <br />
        <PortfolioCards />
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Portfolio