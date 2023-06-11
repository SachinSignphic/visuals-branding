import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <Link to='/' className="nav-logo">
                <img src="/logo.svg" alt="Visuals Branding"/>
                <h2 className="ff-almeria-r fs-2l"><span>Visuals</span> <span>Branding</span></h2>
            </Link>
            <div onClick={() => setIsOpen(!isOpen)} className="toggle-ham">
                <span className={isOpen?"toggle-1 toggle-1-open":"toggle-1"}></span>
                <span className={isOpen?"toggle-2 toggle-2-open":"toggle-2"}></span>
                {/* <span className="toggle-3"></span> */}
            </div>
            <div className="nav-links">
                <Link to='/about#about' className="nav-link ff-gillroy-u fs-3s">About</Link>
                <Link to='/portfolio' className="nav-link ff-gillroy-u fs-3s">Portfolio</Link>
                <Link to='/custom-service' className="nav-link ff-gillroy-b btn-secondary">Custom Service</Link>
                <Link to='/contact' className="nav-link ff-gillroy-b btn-primary">Contact Us</Link>
            </div>
            
            <div className={isOpen? "nav-links-mobile nav-links-mobile-open":"nav-links-mobile"}>
                <Link to='/about#about' className="nav-link ff-gillroy-u fs-3s">About</Link>
                <Link to='/portfolio' className="nav-link ff-gillroy-u fs-3s">Portfolio</Link>
                <Link to='/custom-service' className="nav-link ff-gillroy-b btn-secondary">Custom Service</Link>
                <Link to='/contact' className="nav-link ff-gillroy-b btn-primary">Contact Us</Link>
                <img src="/logo.svg" alt="Visuals Branding"/>
            </div>

        </nav>
    )
}

export default Navbar;