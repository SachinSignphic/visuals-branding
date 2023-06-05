import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav>
            <Link to='/' className="nav-logo">
                <img src="/logo.svg" alt="Visuals Branding"/>
                <h2 className="ff-almeria-r fs-2l"><span>Visuals</span> <span>Branding</span></h2>
            </Link>
            <button onClick={() => setOpenMenu(!openMenu)}>HAM</button>
            <div className="nav-links nav-links">
                <Link to='/about' className="nav-link ff-gillroy-u fs-3s">About</Link>
                <Link to='/portfolio' className="nav-link ff-gillroy-u fs-3s">Portfolio</Link>
                <Link to='/custom-service' className="nav-link ff-gillroy-b btn-secondary">Custom Service</Link>
                <Link to='/contact' className="nav-link ff-gillroy-b btn-primary">Contact Us</Link>
            </div>
        </nav>
    )
}

export default Navbar;