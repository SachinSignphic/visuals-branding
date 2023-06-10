import { Footer, LinedBackground, Navbar, PortfolioProductTitle, PortfolioProductImages, ProductPortfolioDescription } from '../components';
import { useParams } from 'react-router-dom';
import portfolioData from "../assets/portfolioData";

const PortfolioProduct = () => {
  const { id } = useParams();
  const data = portfolioData.filter( elem => elem.id === id );

  // if(data.length === 0) <Navigate to='/error' replace />
  const newData = data[0];

  return (
    <>
        <Navbar />
        <LinedBackground style={{marginTop: "10rem", gap: "10rem"}}>
            <PortfolioProductTitle featured={newData.featured} title={newData.brandTitle}  />
            <PortfolioProductImages images={newData.images}/>
            <ProductPortfolioDescription whiteText={newData.whiteText} purpleText={newData.purpleText} desc={newData.desc} typographyImage={newData.typographyImage}/>
        </LinedBackground>
        <Footer />
    </>
  )
}

export default PortfolioProduct