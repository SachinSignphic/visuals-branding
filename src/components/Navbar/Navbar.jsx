import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo">
                <img src="" alt="" />
                <h3>Visual Desgins</h3>
            </div>
            <div className="nav-links">
                <Link to='/about' className="ff-gillroy-m fs-2s">About</Link>
                <Link to='/portfolio' className="ff-gillroy-m fs-2s">Portfolio</Link>
                <a href="#" className="btn-primary">Custom Service</a>
            </div>
        </nav>
    )
}

export default Navbar;