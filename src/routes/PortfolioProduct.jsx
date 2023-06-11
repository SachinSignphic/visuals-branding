import { Footer, LinedBackground, Navbar, PortfolioProductTitle, PortfolioProductImages, ProductPortfolioDescription } from '../components';
import { useParams } from 'react-router-dom';
import portfolioData from "../assets/portfolioData";
import { useEffect, useState } from 'react';

const PortfolioProduct = () => {
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const data = portfolioData.filter( elem => elem.id === id );

  // if(data.length === 0) <Navigate to='/error' replace />
  const newData = data[0];

  useEffect(() => {
      // window.addEventListener("resize", () => {
        if (screen.width <= 768) {
          setIsMobile(true);
          console.log(screen.width)
      } else {
          setIsMobile(false)
        }
      // });
  }, []);
  return (
    <>
        <Navbar />
        <LinedBackground style={{marginTop: "10rem", gap: `${isMobile?"5rem":"10rem"}`}}>
            <PortfolioProductTitle featured={newData.featured} title={newData.brandTitle}  />
            <PortfolioProductImages images={newData.images}/>
            <ProductPortfolioDescription whiteText={newData.whiteText} purpleText={newData.purpleText} desc={newData.desc} typographyImage={newData.typographyImage}/>
        </LinedBackground>
        <Footer />
    </>
  )
}

export default PortfolioProduct