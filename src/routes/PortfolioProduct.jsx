import { Footer, LinedBackground, Navbar, PortfolioProductTitle, PortfolioProductImages, ProductPortfolioDescription } from '../components';
import { useParams } from 'react-router-dom';
import portfolioData from "../assets/portfolioData";
import Page404 from './Page404';

const PortfolioProduct = () => {
  const { id } = useParams();
  const data = portfolioData.filter( elem => elem.id === id )[0];

  if(data.length === 0) return <Page404 />

  return (
    <>
        <Navbar />
        <LinedBackground style={{marginTop: "10rem", gap: "10rem"}}>
            <PortfolioProductTitle featured={data.featured} title={data.brandTitle}  />
            <PortfolioProductImages images={data.images}/>
            <ProductPortfolioDescription whiteText={data.whiteText} purpleText={data.purpleText} desc={data.desc} typographyImage={data.typographyImage}/>
        </LinedBackground>
        <Footer />
    </>
  )
}

export default PortfolioProduct