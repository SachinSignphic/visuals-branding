import { Footer, LinedBackground, Navbar, PortfolioMain } from "../components"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <LinedBackground style={{marginTop: "10rem"}}>
        <PortfolioMain />
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Portfolio