import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Bel of mail ons</h4>
          <p>012 - 345 67 89</p>
          <p><a href="mailto:klantenservice@knuswonen.nu">klantenservice@knuswonen.nu</a></p>
        </div>
        <div className="footer-section">
          <h4>Openingstijden</h4>
          <p>Maandag t/m donderdag van 8:30 tot 16:30 uur.</p>
          <p>Vrijdag van 8:30 tot 12:00 uur</p>
        </div>
        <div className="footer-section">
          <h4>Kom langs op afspraak</h4>
          <p>Straatweglaan 123</p>
          <p>1234 AB Dorpsstad</p>
        </div>
        <div className="footer-section">
          <h4>Volg ons op onze sociale kanalen</h4>
           <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Cookieverklaring</a>
            <a href="#">Disclaimer</a>
          </div>
          <p>&copy; KnusWonen 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
