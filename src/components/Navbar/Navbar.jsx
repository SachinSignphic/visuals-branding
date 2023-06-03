import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to='/' className="nav-logo">
                <img src="/logo.svg" alt="Visuals Branding"/>
                <h2 className="ff-almeria-r fs-2m"><span>Visual</span> <span>Branding</span></h2>
            </Link>
            <div className="nav-links">
                <Link to='/about' className="nav-link ff-gillroy-u fs-3s">About</Link>
                <Link to='/portfolio' className="nav-link ff-gillroy-u fs-3s">Portfolio</Link>
                <Link to='/custom-service' className="nav-link ff-gillroy-b btn-secondary">Custom Service</Link>
                <Link to='/contact' className="nav-link ff-gillroy-b btn-primary">Contact Us</Link>
            </div>
        </nav>
    )
}

export default Navbar;