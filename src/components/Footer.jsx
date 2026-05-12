import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="logo-area" style={{ marginBottom: '20px' }}>
              <div className="logo-icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <div className="logo-text">
                <span className="logo-title">Krishnaveni</span>
                <span className="logo-subtitle">Talent Schools</span>
              </div>
            </div>
            <p>Empowering young minds with academic excellence and holistic development for over 25 years.</p>
          </div>
          <div className="footer-links-col">
            <h4 className="footer-title">QUICK LINKS</h4>
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#">Admissions</a>
              <a href="#">Academics</a>
              <a href="#">Curriculum</a>
              <a href="#">Achievements</a>
              <a href="#">Activities</a>
              <a href="#">Programs</a>
              <a href="#">Gallery</a>
            </div>
          </div>
          <div className="footer-contact">
            <h4 className="footer-title">CONTACT US</h4>
            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>123 Education Lane, Hyderabad,<br />Telangana 500001</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <i className="fa-regular fa-envelope"></i>
              <span>info@krishnavenitalent.edu.in</span>
            </div>
            <div className="contact-item">
              <i className="fa-regular fa-clock"></i>
              <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Krishnaveni Talent Schools. All rights reserved.</p>
          <div className="powered-by">
            Powered by <span className="powered-logo">nexOra</span> <span style={{ fontSize: '0.7rem', letterSpacing: '1px', opacity: 0.7 }}>SMART DIGITAL EXPERIENCES</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
