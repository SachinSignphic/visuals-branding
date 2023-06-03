// import { Link } from 'react-router-dom'
import { Navbar, Hero, Footer, LinedBackground, TransformSection } from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LinedBackground>
        <TransformSection />
      </LinedBackground>
      <Footer />
    </>
  )
}

export default Home