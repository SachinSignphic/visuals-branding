import { Footer, LinedBackground, Navbar, PortfolioProductTitle, PortfolioProductImages, ProductPortfolioDescription, PortfolioVideo } from '../components';
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
      document.title = "Visuals Branding | " + newData.brandTitle;
  }, [newData.brandTitle]);
  return (
    <>
        <Navbar />
        <LinedBackground style={{marginTop: "10rem", gap: `${isMobile?"5rem":"10rem"}`}}>
            <PortfolioProductTitle featured={newData.featured} title={newData.brandTitle}  />
            <PortfolioVideo ytURL={newData.mainVideoURL} /> 
            <PortfolioProductImages images={newData.images}/>
            <ProductPortfolioDescription whiteText={newData.whiteText} purpleText={newData.purpleText} desc={newData.desc} typographyImage={newData.typographyImage}/>
            <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            {
              newData.videoURLs.map((video, i) => {
                return (
                  <PortfolioVideo key={i} videoURL={video} />
                );
              })
            }
            </div>
        </LinedBackground>
        <Footer />
    </>
  )
}

export default PortfolioProduct