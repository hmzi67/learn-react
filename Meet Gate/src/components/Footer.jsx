import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="footer-main">
            <div className="footer-data">
                <section>
                &copy; 2024 Meet Gate | Designed by <a href="https://github.com/hmzi67" target="_blank">Hamza Waheed</a> | 
                </section>
                <section className="link-section">
                    {/* Icons */}
                    <a href="#" className="links"><IoLogoFacebook /> Facebook</a>
                    <a href="#" className="links"><FaYoutube /> Youtube</a>
                    <a href="#" className="links"><FaLinkedin /> LinkedIn</a>
                    <a href="#" className="links"><FaSquareInstagram /> Instagram</a>
                </section>
            </div>
        </footer>
    )
}