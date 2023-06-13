import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return(
        <footer id="footer">
            <div className="footer-logo">
                <img src="/logo.svg" alt="Visuals Branding" />
            </div>
            <div className="copyrights">
                <h3 className='ff-gillroy-l fs-2m'>© 2023 <span>Visuals Branding</span>, LLC</h3>
            </div>
            <div className="socials">
                <Link to="/">
                    <img src="/socials/behance.png" loading='lazy' alt="behance" />
                </Link>
                <Link to="/">
                    <img src="/socials/twitter.png" loading='lazy' alt="twitter" />
                </Link>
                <Link to="/">
                    <img src="/socials/facebook.png" loading='lazy' alt="facebook" />
                </Link>
                <Link to="/">
                    <img src="/socials/instagram.png" loading='lazy' alt="instagram" />
                </Link>
                <Link to="/">
                    <img src="/socials/linkedin.png" loading='lazy' alt="linkedin" />
                </Link>
            </div>
        </footer>
    )
}
export default Footer;