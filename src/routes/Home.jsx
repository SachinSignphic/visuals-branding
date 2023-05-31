import { Link } from 'react-router-dom'
import { Navbar } from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Link to="/about">Hi</Link>
    </>
  )
}

export default Home