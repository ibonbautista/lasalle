import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
          <div className="contact-info">
            <p>Email: contacto@lasalle.com</p>
            <p>Tel: +34 123 456 789</p>
          </div>
        
          <div className="social-links">
            <a href="https://www.facebook.com/p/La-Salle-Basket-100067021457248/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://x.com/lasallebasket" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/lasallebasket" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </div>

          <div className="scroll-to-top-container">
              <button onClick={scrollToTop} className="scroll-to-top"> ↑ UP </button>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Club Deportivo La Salle Bilbao. All Copyrights reserved.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
